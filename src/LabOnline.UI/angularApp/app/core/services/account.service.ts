import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Configuration } from '../../app.constants';
import { Person } from './../../models/Person';

@Injectable()
export class AccountService {
    private actionUrl: string;
    private tokenUrl: string;
    public token: string;
    public modifiedBy?: string;

    public constructor(
        private http: Http,
        private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/people/';
        this.tokenUrl = configuration.Server + 'token';
        let currentUser = this.getToken();
        this.token = (currentUser && currentUser.token) || null;
        this.modifiedBy = (currentUser && currentUser.userId) || null;
    }

    private getLoginHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Cache-Control', 'no-cache');
        return headers;
    }

    private getHeaders(): Headers {
        let headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public login(username: string, password: string): Observable<boolean> {
        let args = new URLSearchParams();
        args.append('username', username);
        args.append('password', password);
        let params = args.toString();

        return this.http.post(this.tokenUrl, params, { headers: this.getLoginHeaders() })
            .map((res: Response) => {
				let data = res.json();
				if (data) {
					this.token = data.AccessToken;
					let currentDate = new Date();
					let expiresDate = new Date(currentDate.getTime() + ((data.ExpiresIn / 60) * 60 * 1000));
				    localStorage.setItem('user', JSON.stringify(
					{
						username: username,
						token: data.AccessToken,
						expiresDate: expiresDate,
						userId: data.UserId,
						fullName: data.FullName
					}));
					return true;
				}
				return false;
			});
    }

    public getAll(filter: string): Observable<Person[]> {
        let params = new URLSearchParams();
        params.set('searchCondition', filter);
        let options = new RequestOptions({
            headers: this.getHeaders(),
            search: params
        });

        return this.http.get(this.actionUrl + 'all/', options)
            .map((res: Response) => {
				let items: Person[] = <Person[]>res.json();
				return items;
			});
    }

    public get(id: string): Observable<Person> {
        let params = new URLSearchParams();
        params.set('id', id);
        let options = new RequestOptions({
            headers: this.getHeaders(),
            search: params
        });
        return this.http.get(this.actionUrl + 'one/', options)
            .map((res: Response) => {
				let item: Person = <Person>res.json();
				return item;
			});
    }

    public count(): Observable<number> {
        let options = new RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(this.actionUrl + 'count/', options)
            .map((res: Response) => {
                let item: number = <number>res.json();
                return item;
            });
    }

    public create(user: Person): Observable<any> {
		user.id = '00000000-0000-0000-0000-000000000000';
        user.updatedBy = this.modifiedBy;
		let entity = JSON.stringify(user);
		user.id = null;

        let options = new RequestOptions({ headers: this.getHeaders() });

        return this.http.post(this.actionUrl + 'add/', entity, options)
            .map((res: Response) => {
				return res.json();
			});
    }
    public update(user: Person): Observable<any> {
        user.updatedBy = this.modifiedBy;
		let entity = JSON.stringify(user);

        let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.put(this.actionUrl + 'update/' + user.id, entity, options)
			.map((res: Response) => {
				return res.json();
			});
    }
    public delete(user: Person) {
		let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.delete(this.actionUrl + 'delete/' + user.id + '.' + this.modifiedBy, options)
			.map((res: Response) => {
				return res.json();
			});
    }
    public confirmEmail(userId: string): Observable<any> {
		let body = JSON.stringify({ 'userId': userId });
		return this.http
			.post(this.actionUrl + 'confirmEmail', body, { headers: this.getHeaders() })
            .map((res: Response) => res.json());
	}

    public forgotPassword(email: string): Observable<any> {
		let body = JSON.stringify({ 'email': email });
		return this.http
			.post(this.actionUrl + 'forgotPassword', body, { headers: this.getHeaders() })
            .map((res: Response) => res.json());
	}

    public validateResetToken(token: string): Observable<any> {
		let data = JSON.stringify({ 'userId': token });
		return this.http
			.post(this.actionUrl + 'validateresettoken', data, { headers: this.getHeaders() })
            .map((res: Response) => res.json());
	}

	public resetPassword(userId: string, password: string): Observable<any> {
		let body = JSON.stringify({ 'userId': userId, 'password': password, 'confirmPassword': password });
		return this.http
			.post(this.actionUrl + 'resetpassword', body, { headers: this.getHeaders() })
            .map((res: Response) => res.json());
	}

	public changePassword(userId: string, currentPassword: string, password: string): Observable<any> {
		let body = JSON.stringify({ 'userId': userId, 'currentPassword': currentPassword, 'password': password });
		return this.http
			.post(this.actionUrl + 'changepassword', body, { headers: this.getHeaders() })
            .map((res: Response) => res.json());
	}

    private getToken(): any {
		let data = localStorage.getItem('user');
		if (data) {
			return JSON.parse(data);
		}
		return data;
	}
}