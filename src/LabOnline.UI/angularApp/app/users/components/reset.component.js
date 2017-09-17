var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AccountService } from './../../core/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(dataService, router, route, authService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.message = '';
        this.user = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            currentpassword: ''
        };
        this.isPasswordChanged = false;
        this.isLoading = false;
        this.isConfirmed = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.validateToken();
    };
    ResetPasswordComponent.prototype.validateToken = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params.forEach(function (params) {
            _this.token = params['id'];
            _this.dataService.validateResetToken(_this.token).subscribe(function (data) {
                _this.isConfirmed = true;
                _this.isLoading = false;
            }, function (error) {
                _this.isLoading = false;
                var message = error;
                if (error.status) {
                    switch (error.status) {
                        case 400:
                            _this.showError(error.status, 'Datos incorrectos para realizar el proceso.');
                            break;
                        case 401:
                            _this.showError(error.status, 'La cuenta ya fue confirmada o la solicitud es inválida.');
                            break;
                        case 404:
                            _this.showError(error.status, 'El token de seguridad no es correcto.');
                            break;
                        case 500:
                            _this.showError(error.status, message._body);
                            break;
                    }
                }
                _this.message = message;
            });
        });
    };
    ResetPasswordComponent.prototype.changePassword = function () {
        var _this = this;
        this.isLoading = true;
        this.isPasswordChanged = false;
        if (this.user.password !== this.user.confirmPassword) {
            this.showError(0, 'La contraseña y la confirmación de la contraseña son diferentes');
            return;
        }
        this.dataService.resetPassword(this.token, this.user.password).subscribe(function (data) {
            _this.isPasswordChanged = true;
            _this.isLoading = false;
        }, function (error) {
            var message = error;
            _this.showError(error.status, message._body);
        });
    };
    ResetPasswordComponent.prototype.showError = function (status, message) {
        if (status === 500) {
            message = 'Ocurrio un error inesperado en la ejecución del servicio. ' +
                'Por favor contacte al administrador del sistema para poder ayudarle con su solicitud. ' + message;
        }
        this.message = message;
        this.isLoading = false;
        this.isPasswordChanged = false;
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Component({
        selector: 'reset-component',
        templateUrl: 'reset.component.html'
    }),
    __metadata("design:paramtypes", [AccountService,
        Router,
        ActivatedRoute,
        AuthService])
], ResetPasswordComponent);
export { ResetPasswordComponent };
