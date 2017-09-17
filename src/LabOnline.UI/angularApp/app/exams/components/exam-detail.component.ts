import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../core/services/exam.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'exam-detail-component',
    templateUrl: 'exam-detail.component.html'
})

export class ExamDetailComponent implements OnInit {
    public filterTimeout = 0;
    public message = '';
    public isLoading = false;
    public examId = '';
    public userId = '';

    public constructor(
        private route: ActivatedRoute,
        protected authService: AuthService,
        private examService: ExamService
    ) {}
    public ngOnInit() {
        this.isLoading = true;
        this.message = '';
        this.route.params.forEach((p: any) => {
            const info = p['id'];
            if (typeof info !== 'undefined') {
                let items = info.split('.');
                this.examId = items[0];
                let ownerId = items[1];
                this.generateReport(ownerId);
            }
        });
    }
    public generateReport(ownerId: string) {
        this.userId = this.authService.getUserId();
        let code = ownerId + '.' + this.userId;
		this.examService.getPdfExam(this.examId, code)
			.subscribe(
				pdf => {
					this.isLoading = false;
					let fileName = <any>pdf;
					if (fileName.exists) {
						this.showPdf(fileName.name);
					} else {
                        this.showMessage('Problemas con la generación del reporte. DETALLES: ' + fileName.error);
					}
				},
                error => {
					this.handleError(error);
				}
			);
	}
    public showPdf(urlPdf: string): any {
        let self = this;
		let xhr = new XMLHttpRequest();
        xhr.open('GET', urlPdf, true);
        xhr.responseType = 'blob';

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
				let blob = new Blob([this.response], {type: 'application/pdf'});
				let fileURL = URL.createObjectURL(blob);
				window.location.replace(fileURL);
            }
        };
        xhr.send();
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