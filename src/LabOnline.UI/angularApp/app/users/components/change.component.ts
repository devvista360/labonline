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
    selector: 'change-component',
    templateUrl: 'change.component.html'
})

export class ChangePasswordComponent implements OnInit {
    public message = '';
    public user: LogonUser = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        currentpassword: ''
    };
    public isSuccess = false;
    public isLoading = false;

    public constructor (
        private configuration: Configuration,
        private dataService: AccountService,
        private router: Router,
        private authService: AuthService) {
    }

    public ngOnInit(): void {
	}

    public change(): void {
        this.isLoading = true;
        this.message = '';
        this.isSuccess = false;
        let ids = this.authService.getUserIds();

        if (this.user.password !== this.user.confirmPassword) {
            this.showError('La contraseña y la confirmación de la contraseña son diferentes');
            return;
        }

        this.dataService.changePassword(ids, this.user.currentpassword, this.user.password)
            .subscribe(
		        data  => {
			        this.isSuccess = true;
                    this.isLoading = false;
                },
                error => {
                    if (error.status === 403) {
                        this.showError('La contraseña actual es incorrecta.');
                    } else {
                        let message = <any>error;
                        this.showError(message);
                    }
                });
    }

    private showError(message: string) : void {
        this.message = message;
        this.isLoading = false;
        this.isSuccess = false;
    }
}
