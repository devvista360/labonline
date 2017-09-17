var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AccountService } from './../../core/services/account.service';
import { Component } from '@angular/core';
import { Configuration } from '../../app.constants';
import { Router } from '@angular/router';
var LoginComponent = (function () {
    function LoginComponent(configuration, accountService, router) {
        this.configuration = configuration;
        this.accountService = accountService;
        this.router = router;
        this.isLoading = false;
        this.message = '';
        this.user = { documentType: 'CC', documentId: '', password: '', userType: 'P' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.documentTypes = this.configuration.IdTypes;
        this.userTypes = this.configuration.UserTypes;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.isLoading = true;
        var username = this.user.userType + '-' + this.user.documentType + '-' + this.user.documentId;
        var forbidden = 'Usuario o contraseña incorrectos.';
        this.accountService.login(username, this.user.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/home']);
            }
            else {
                _this.showError(forbidden);
            }
        }, function (error) {
            switch (error.status) {
                case 0:
                    _this.showError('Servicio fuera de línea.');
                    break;
                case 400:
                case 403:
                    _this.showError(forbidden);
                    break;
                default:
                    var failure = error;
                    console.error(failure);
                    _this.showError(failure);
                    break;
            }
        });
    };
    LoginComponent.prototype.showError = function (message) {
        this.message = message;
        this.isLoading = false;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'login-component',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [Configuration,
        AccountService,
        Router])
], LoginComponent);
export { LoginComponent };
