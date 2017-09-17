import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthService) {}

  public canActivate() {
    return this.isEnabled();
  }

  public canActivateChild() {
    return this.isEnabled();
  }

  public getToken(): any {
		let data = localStorage.getItem('user');
		if (data) {
			let currentUser = JSON.parse(data);
      let token = (currentUser && currentUser.token) || null;
		  return token;
		}
    return null;
	}

  private isEnabled(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}