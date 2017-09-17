var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Column } from '../../shared/components/grid/column';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../core/services/exam.service';
import { AuthService } from '../../core/services/auth.service';
import { AccountService } from '../../core/services/account.service';
import { User } from '../../models/user';
import { saveAs } from 'file-saver';
var ExamComponent = (function () {
    function ExamComponent(examService, authService, userService, route) {
        this.examService = examService;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.gridTitle = '';
        this.nationalId = '0';
        this.userFullName = '';
        this.searchEnabled = false;
        this.patientEnabled = false;
        this.selectedYear = 0;
        this.itemsCount = 0;
        this.searchYears = [];
        this.isLoading = false;
        this.filter = '';
        this.message = '';
        this.adminId = '';
        this.grid = new GridComponent();
        this.user = new User();
        this.confidential = 'CONFINDENCIAL';
        this.filterTimeout = 0;
    }
    ExamComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.grid.columns = [
            new Column('examDate', 'Fecha'),
            new Column('examId', 'Orden'),
            new Column('patientName', 'Paciente'),
            new Column('patientId', 'Identificación')
        ];
        this.loadYears();
        this.identifyUser();
    };
    ExamComponent.prototype.isConfidentialState = function (state) {
        return state === this.confidential;
    };
    ExamComponent.prototype.loadYears = function () {
        this.selectedYear = (new Date()).getFullYear();
        this.searchYears = [this.selectedYear, this.selectedYear - 1, this.selectedYear - 2];
    };
    ExamComponent.prototype.identifyUser = function () {
        var _this = this;
        var adminRole = 'S';
        var data = this.authService.getUserIds().split('-');
        this.user.userId = this.authService.getUserId();
        this.configure(data[0], data[1], data[2], '');
        if (this.user.userType === adminRole) {
            this.adminId = this.user.userId;
            this.route.queryParams.subscribe(function (data) {
                _this.user.userId = data['id'];
                _this.loadUser();
            });
        }
        else {
            this.loadUser();
        }
    };
    ExamComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.get(this.user.userId)
            .subscribe(function (user) {
            _this.configure(user.userType, user.documentType, user.documentId, user.lastName + ', ' + user.firstName);
            _this.search();
        }, function (error) {
            var message = error;
            _this.showMessage(message);
        });
    };
    ExamComponent.prototype.configure = function (userType, typeId, id, name) {
        this.user.userType = userType;
        this.user.documentType = typeId;
        this.user.documentId = id;
        this.nationalId = typeId + '-' + id;
        this.userFullName = name;
        switch (this.user.userType) {
            case 'P':
                this.gridTitle = 'Paciente';
                this.searchEnabled = false;
                this.patientEnabled = false;
                break;
            case 'M':
                this.gridTitle = 'Médico';
                this.searchEnabled = false;
                this.patientEnabled = true;
                break;
            case 'E':
                this.gridTitle = 'Empresa';
                this.searchEnabled = true;
                this.patientEnabled = true;
                break;
        }
    };
    ExamComponent.prototype.onChange = function (newYear) {
        this.selectedYear = newYear;
        this.search();
    };
    ExamComponent.prototype.search = function () {
        var _this = this;
        if (this.isLoading) {
            return;
        }
        this.message = '';
        this.isLoading = true;
        switch (this.user.userType) {
            case 'P':
                this.examService.getExams('patient', this.selectedYear, this.user.documentType, this.user.documentId, this.user.documentId)
                    .subscribe(function (exams) { _this.loadExams(exams); }, function (error) { _this.handleError(error); });
                break;
            case 'M':
                this.examService.getExams('doctor', this.selectedYear, this.user.documentType, this.user.documentId, this.user.documentId)
                    .subscribe(function (exams) { _this.loadExams(exams); }, function (error) { _this.handleError(error); });
                break;
            case 'E':
                this.examService.getExams('organization', this.selectedYear, this.user.documentType, this.user.documentId, this.filter)
                    .subscribe(function (exams) { _this.loadExams(exams); }, function (error) { _this.handleError(error); });
                break;
        }
    };
    ExamComponent.prototype.viewExam = function (item) {
        if (this.canViewExam(item)) {
            window.open('./#/examdetail/' + item.examId + '.' + this.user.userId);
        }
    };
    ExamComponent.prototype.downloadExam = function (item) {
        var _this = this;
        if (this.canViewExam(item)) {
            var code = this.user.userId + '.' + (this.adminId !== '' ? this.adminId : this.user.userId);
            this.examService.getPdfExam(item.examId, code).subscribe(function (pdf) {
                var fileName = pdf;
                if (fileName.exists) {
                    _this.downloadPdf(fileName.name, item.examId);
                }
                else {
                    _this.showMessage('Documento pdf no encontrado');
                }
            }, function (error) {
                _this.handleError(error);
            });
        }
    };
    ExamComponent.prototype.canViewExam = function (item) {
        return true;
    };
    ExamComponent.prototype.downloadPdf = function (urlPdf, examId) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlPdf, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(blob);
                saveAs(blob, examId + '.pdf');
            }
        };
        xhr.send();
    };
    ExamComponent.prototype.loadExams = function (items) {
        this.isLoading = false;
        this.itemsCount = items.length;
        this.grid.setRows(items);
    };
    ExamComponent.prototype.handleError = function (response) {
        this.isLoading = false;
        var failure = response;
        this.showMessage(failure);
    };
    ExamComponent.prototype.showMessage = function (text) {
        var _this = this;
        window.clearTimeout(this.filterTimeout);
        this.message = text;
        this.filterTimeout = window.setTimeout(function () { _this.message = ''; }, 5000);
    };
    return ExamComponent;
}());
ExamComponent = __decorate([
    Component({
        selector: 'exam-component',
        templateUrl: 'exam.component.html'
    }),
    __metadata("design:paramtypes", [ExamService,
        AuthService,
        AccountService,
        ActivatedRoute])
], ExamComponent);
export { ExamComponent };
