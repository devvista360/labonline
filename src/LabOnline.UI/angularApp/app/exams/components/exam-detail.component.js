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
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../../core/services/exam.service';
import { AuthService } from '../../core/services/auth.service';
var ExamDetailComponent = (function () {
    function ExamDetailComponent(route, authService, examService) {
        this.route = route;
        this.authService = authService;
        this.examService = examService;
        this.filterTimeout = 0;
        this.message = '';
        this.isLoading = false;
        this.examId = '';
        this.userId = '';
    }
    ExamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.message = '';
        this.route.params.forEach(function (p) {
            var info = p['id'];
            if (typeof info !== 'undefined') {
                var items = info.split('.');
                _this.examId = items[0];
                var ownerId = items[1];
                _this.generateReport(ownerId);
            }
        });
    };
    ExamDetailComponent.prototype.generateReport = function (ownerId) {
        var _this = this;
        this.userId = this.authService.getUserId();
        var code = ownerId + '.' + this.userId;
        this.examService.getPdfExam(this.examId, code)
            .subscribe(function (pdf) {
            _this.isLoading = false;
            var fileName = pdf;
            if (fileName.exists) {
                _this.showPdf(fileName.name);
            }
            else {
                _this.showMessage('Problemas con la generación del reporte. DETALLES: ' + fileName.error);
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    ExamDetailComponent.prototype.showPdf = function (urlPdf) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlPdf, true);
        xhr.responseType = 'blob';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var blob = new Blob([this.response], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(blob);
                window.location.replace(fileURL);
            }
        };
        xhr.send();
    };
    ExamDetailComponent.prototype.handleError = function (response) {
        this.isLoading = false;
        var failure = response;
        this.showMessage(failure);
    };
    ExamDetailComponent.prototype.showMessage = function (text) {
        var _this = this;
        window.clearTimeout(this.filterTimeout);
        this.message = text;
        this.filterTimeout = window.setTimeout(function () { _this.message = ''; }, 5000);
    };
    return ExamDetailComponent;
}());
ExamDetailComponent = __decorate([
    Component({
        selector: 'exam-detail-component',
        templateUrl: 'exam-detail.component.html'
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        AuthService,
        ExamService])
], ExamDetailComponent);
export { ExamDetailComponent };
