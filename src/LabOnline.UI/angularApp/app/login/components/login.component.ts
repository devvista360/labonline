import { AccountService } from './../../core/services/account.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Configuration } from '../../app.constants';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    public message: string;
    public isLoading = false;
    public user: User;
    public documentTypes: Array<Object>;
    public userTypes: Array<Object>;

    public constructor(
        private configuration: Configuration,
        private accountService: AccountService,
        private router: Router) {
        this.message = '';
        this.user = { documentType: 'CC', documentId: '', password: '', userType: 'P' };
    }

    public ngOnInit() {
        this.documentTypes = this.configuration.IdTypes;
        this.userTypes = this.configuration.UserTypes;
    }

    public login() {
        this.message = '';
        this.isLoading = true;
        let username: string = this.user.userType + '-' + this.user.documentType + '-' + this.user.documentId;
        let forbidden = 'Usuario o contraseña incorrectos.';

        this.accountService.login(username, this.user.password)
            .subscribe(
            result => {
					if (result === true) {
						this.router.navigate(['/home']);
					} else {
						this.showError(forbidden);
					}
				},
                error => {
                    switch (error.status) {
                        case 0:
                            this.showError('Servicio fuera de línea.');
                            break;
                        case 400:
                        case 403:
                            this.showError(forbidden);
                            break;
                        default:
                            let failure = <any>error;
                            console.error(failure);
                            this.showError(failure);
                            break;
                    }
				});
    }

    private showError(message: string) {
		this.message = message;
		this.isLoading = false;
	}
}
