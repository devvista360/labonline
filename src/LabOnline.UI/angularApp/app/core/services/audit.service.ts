import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Configuration } from '../../app.constants';
import { Audit } from './../../models/Audit';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AuditService {
    private actionUrl: string;

    public constructor(
        private http: Http,
        private configuration: Configuration,
        private authGuard: AuthGuard) {
        this.actionUrl = configuration.Server + 'api/audit/';
    }

    private getHeaders(): Headers {
        let headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.authGuard.getToken() });
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public getAll(id: string): Observable<Audit[]> {
        let options = new RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(this.actionUrl + 'getall/' + id, options)
            .map((res: Response) => {
				let items: Audit[] = <Audit[]>res.json();
				return items;
			});
    }
}