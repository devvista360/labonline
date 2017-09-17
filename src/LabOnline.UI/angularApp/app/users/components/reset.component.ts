import { Component, OnInit } from '@angular/core';
import { LogonUser } from '../../models/logonuser';
import { AccountService } from './../../core/services/account.service';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'reset-component',
    templateUrl: 'reset.component.html'
})

export class ResetPasswordComponent implements OnInit {
    public message = '';
    public token: string;
    public user: LogonUser = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        currentpassword: ''
    };
    public isPasswordChanged = false;
    public isLoading = false;
    public isConfirmed = false;

    public constructor (
        private dataService: AccountService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService) {
    }

    public ngOnInit(): void {
        this.validateToken();
	}

    validateToken() {
        this.isLoading = true;
        this.route.params.forEach((params: Params) => {
			this.token = params['id'];
			this.dataService.validateResetToken(this.token).subscribe(
				data  => {
					this.isConfirmed = true;
					this.isLoading = false;
				},
				error => {
					this.isLoading = false;
					let message = <any>error;
					if (error.status) {
						switch (error.status) {
							case 400:
                                this.showError(error.status, 'Datos incorrectos para realizar el proceso.');
								break;
							case 401:
                                this.showError(error.status, 'La cuenta ya fue confirmada o la solicitud es inválida.');
								break;
							case 404:
                                this.showError(error.status, 'El token de seguridad no es correcto.');
								break;
							case 500:
								this.showError(error.status, message._body);
								break;
						}
					}
					this.message = message;
				});
		});
	}

    public changePassword(): void {
		this.isLoading = true;
		this.isPasswordChanged = false;

        if (this.user.password !== this.user.confirmPassword) {
            this.showError(0, 'La contraseña y la confirmación de la contraseña son diferentes');
            return;
        }

		this.dataService.resetPassword(this.token, this.user.password).subscribe(
				data  => {
					this.isPasswordChanged = true;
					this.isLoading = false;
				},
				error => {
					let message = <any>error;
                    this.showError(error.status, message._body);
				});
	}
    private showError(status: number, message: string) : void {
        if (status === 500) {
            message = 'Ocurrio un error inesperado en la ejecución del servicio. ' +
			'Por favor contacte al administrador del sistema para poder ayudarle con su solicitud. ' + message;
        }

        this.message = message;
        this.isLoading = false;
        this.isPasswordChanged = false;
    }
}
