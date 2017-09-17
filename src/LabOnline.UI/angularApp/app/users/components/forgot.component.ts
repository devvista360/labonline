import { Component, OnInit } from '@angular/core';
import { LogonUser } from '../../models/logonuser';
import { AccountService } from './../../core/services/account.service';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'forgot-component',
    templateUrl: 'forgot.component.html'
})

export class ForgotPasswordComponent implements OnInit {
    public message = '';
    public userEmail = '';
    public isSuccess = false;
    public isLoading = false;

    public constructor (
        private dataService: AccountService,
        private router: Router,
        private authService: AuthService) {
    }

    public ngOnInit(): void {
	}

    public recover(): void {
        this.isSuccess = false;
        this.isLoading = true;
        this.dataService.forgotPassword(this.userEmail).subscribe(
				data  => {
                    this.isSuccess = true;
					this.isLoading = false;
				},
				error => {
					this.isLoading = false;
					let message = <any>error;

					if (error.status) {
						switch (error.status) {
							case 404:
								message = 'La cuenta de correo suministrada no se encuentra registrada.';
								break;
							case 500:
								message = 'Ocurrio un error inesperado en la ejecución del servicio. ' +
								'Por favor contacte al administrador del sistema para poder ayudarle con su solicitud. ' +
								message._body;
								break;
						}
					}
					this.message = message;
				});
    }
}