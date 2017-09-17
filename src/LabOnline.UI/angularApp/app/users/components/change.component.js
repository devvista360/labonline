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
import { Configuration } from '../../app.constants';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(configuration, dataService, router, authService) {
        this.configuration = configuration;
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.message = '';
        this.user = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            currentpassword: ''
        };
        this.isSuccess = false;
        this.isLoading = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.change = function () {
        var _this = this;
        this.isLoading = true;
        this.message = '';
        this.isSuccess = false;
        var ids = this.authService.getUserIds();
        if (this.user.password !== this.user.confirmPassword) {
            this.showError('La contraseña y la confirmación de la contraseña son diferentes');
            return;
        }
        this.dataService.changePassword(ids, this.user.currentpassword, this.user.password)
            .subscribe(function (data) {
            _this.isSuccess = true;
            _this.isLoading = false;
        }, function (error) {
            if (error.status === 403) {
                _this.showError('La contraseña actual es incorrecta.');
            }
            else {
                var message = error;
                _this.showError(message);
            }
        });
    };
    ChangePasswordComponent.prototype.showError = function (message) {
        this.message = message;
        this.isLoading = false;
        this.isSuccess = false;
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Component({
        selector: 'change-component',
        templateUrl: 'change.component.html'
    }),
    __metadata("design:paramtypes", [Configuration,
        AccountService,
        Router,
        AuthService])
], ChangePasswordComponent);
export { ChangePasswordComponent };
