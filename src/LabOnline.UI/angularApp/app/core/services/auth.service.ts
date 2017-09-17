import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    public constructor(private router: Router) {}
    public isAuthenticated(): boolean {
        let user = this.getToken();
		if (user) {
			let expiresDate = new Date(user.expiresDate);
			let now = new Date();
			if (now.getTime() < expiresDate.getTime()) {
				return true;
			}
        }
        return false;
    }

	public getUserType(): string {
		let user = this.getToken();
		if (user) {
			return user.username.split('-')[0];
        }
		return '';
	}

	public getUserName(): string {
		let user = this.getToken();
		if (user) {
			return user.fullName;
        }
		return '';
	}

	public getUserIds(): string {
		let user = this.getToken();
		if (user) {
			return user.username;
        }
		return '';
	}

	public getUserId() {
		let user = this.getToken();
		if (user) {
			return user.userId;
        }
		return '';
	}

    public getToken(): any {
		let data = localStorage.getItem('user');
		if (data) {
			let user = JSON.parse(data);
			return user;
		}
		return data;
	}

    public logout(): void {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }
}