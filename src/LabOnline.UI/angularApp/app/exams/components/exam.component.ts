import { Component, OnInit } from '@angular/core';
import { Column } from '../../shared/components/grid/column';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { ExamService } from '../../core/services/exam.service';
import { AuthService } from '../../core/services/auth.service';
import { AccountService } from '../../core/services/account.service';
import { ExamOrder } from '../../models/examOrder';
import { User } from '../../models/user';
import { saveAs } from 'file-saver';

@Component({
    selector: 'exam-component',
    templateUrl: 'exam.component.html'
})

export class ExamComponent implements OnInit {
    public gridTitle = '';
    public nationalId = '0';
    public userFullName = '';
    public searchEnabled = false;
    public patientEnabled = false;
    public selectedYear = 0;
    public itemsCount = 0;
    public searchYears: number[] = [];
    public isLoading = false;
    public filter = '';
    public message = '';
    public adminId = '';
    public grid = new GridComponent();
    public user = new User();
    public confidential = 'CONFINDENCIAL';
    public filterTimeout = 0;

    public constructor(
        protected examService: ExamService,
        protected authService: AuthService,
        protected userService: AccountService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.message = '';
        this.grid.columns = [
            new Column('examDate', 'Fecha'),
			new Column('examId', 'Orden'),
			new Column('patientName', 'Paciente'),
			new Column('patientId', 'Identificación')
        ];
        this.loadYears();
        this.identifyUser();
    }
    public isConfidentialState(state: string): boolean {
        return state === this.confidential;
    }
    private loadYears() {
        this.selectedYear = (new Date()).getFullYear();
        this.searchYears = [this.selectedYear, this.selectedYear - 1, this.selectedYear - 2];
    }
    private identifyUser() {
        const adminRole = 'S';
        let data = this.authService.getUserIds().split('-');
        this.user.userId = this.authService.getUserId();
        this.configure(data[0], data[1], data[2], '');

        if (this.user.userType === adminRole) {
            this.adminId = this.user.userId;
            this.route.queryParams.subscribe(data => {
                this.user.userId = data['id'];
                this.loadUser();
            });
        } else {
            this.loadUser();
        }
    }
    private loadUser() {
        this.userService.get(this.user.userId)
            .subscribe(user => {
                this.configure(user.userType, user.documentType, user.documentId, user.lastName + ', ' + user.firstName);
                this.search();
            }
            , error => {
                let message = <any>error;
                this.showMessage(message);
            });
    }
    private configure(userType: string, typeId: string, id: string, name: string): void {
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
    }
    public onChange(newYear: number) {
        this.selectedYear = newYear;
        this.search();
    }

    public search() {
        if (this.isLoading) {
            return;
        }
        this.message = '';
        this.isLoading = true;
        switch (this.user.userType) {
            case 'P':
                this.examService.getExams('patient', this.selectedYear, this.user.documentType, this.user.documentId, this.user.documentId)
                    .subscribe(exams => { this.loadExams(exams); }
                    , error => { this.handleError(error); });
                break;
            case 'M':
                this.examService.getExams('doctor', this.selectedYear, this.user.documentType, this.user.documentId, this.user.documentId)
                    .subscribe(exams => { this.loadExams(exams); }
                    , error => { this.handleError(error); });
                break;
            case 'E':
                this.examService.getExams('organization', this.selectedYear, this.user.documentType, this.user.documentId, this.filter)
                    .subscribe(exams => { this.loadExams(exams); }
                    , error => { this.handleError(error); });
                break;
        }
    }
    public viewExam(item: ExamOrder) {
        if (this.canViewExam(item)) {
            window.open('./#/examdetail/' + item.examId + '.' + this.user.userId);
        }
    }
    public downloadExam(item: ExamOrder) {
        if (this.canViewExam(item)) {
            let code = this.user.userId + '.' + (this.adminId !== '' ? this.adminId : this.user.userId);
            this.examService.getPdfExam(item.examId, code).subscribe(
                pdf => {
                    let fileName = <any>pdf;
                    if (fileName.exists) {
                        this.downloadPdf(fileName.name, item.examId);
                    } else {
                        this.showMessage('Documento pdf no encontrado');
                    }
                }
                , error => {
                    this.handleError(error);
            });
        }
    }
    private canViewExam(item: ExamOrder): boolean {
        return true;
    }

    private downloadPdf(urlPdf: string, examId: string) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', urlPdf, true);
        xhr.responseType = 'blob';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let blob = new Blob([this.response], { type: 'application/pdf' });
                let fileURL = URL.createObjectURL(blob);
                saveAs(blob, examId + '.pdf');
            }
        };

        xhr.send();
    }

    private loadExams(items: ExamOrder[]) {
        this.isLoading = false;
        this.itemsCount = items.length;
        this.grid.setRows(items);
    }

    private handleError(response: Response) {
		this.isLoading = false;
		let failure = <any>response;
        this.showMessage(failure);
	}

    private showMessage(text: string) {
        window.clearTimeout(this.filterTimeout);
        this.message = text;
        this.filterTimeout = window.setTimeout(() => { this.message = ''; }, 5000);
    }
}
