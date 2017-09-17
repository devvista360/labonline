import { Configuration } from '../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';
import { ExamOrder } from '../../models/examOrder';
import { PdfFile } from '../../models/pdfFile';

@Injectable()
export class ExamService {
    private actionUrl = 'api/exams/';
	private headers: Headers;
    public modifiedBy?: string;
    public token: string;

    public constructor(
        private http: Http,
        private configuration: Configuration,
        private authService: AuthService) {
        this.actionUrl = configuration.Server + 'api/exams/';
        let currentUser = authService.getToken();
        this.token = (currentUser && currentUser.token) || null;
        this.modifiedBy = (currentUser && currentUser.userId) || null;
        this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        this.headers.append('Content-Type', 'application/json');
    }

	private getHeaders(): Headers {
        let headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public getExams(actionName: string, year: number, documentType: string, documentId: string, patientId: string): Observable<ExamOrder[]> {
        let apiUrl = this.actionUrl + actionName + '/' + year;
		let params = new URLSearchParams();

		switch (actionName.toLowerCase()) {
			case 'organization':
                patientId = patientId.length == 0 ? '*' : patientId;
				apiUrl = apiUrl + '/' + documentId + '/' + patientId;
                break;
			case 'doctor':
			case 'patient':
			default:
				apiUrl = apiUrl + '/' + documentType + '/' + documentId;
				break;
		}
		let options = new RequestOptions({
			headers: this.headers
		});
        return this.http.get(apiUrl, options)
            .map((response: Response) => {
				let items: ExamOrder[] = <ExamOrder[]>response.json();
				return items;
			});
    }

    public getPdfExam(examId: string, code: string): Observable<PdfFile> {
		let options = new RequestOptions({
			headers: this.headers
		});
        return this.http.get(this.actionUrl + 'Pdf/' + examId + '/' + code)
            .map((response: Response) => response.json());
	}
}
