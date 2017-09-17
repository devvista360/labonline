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
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(dataService, router, authService) {
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.message = '';
        this.userEmail = '';
        this.isSuccess = false;
        this.isLoading = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.recover = function () {
        var _this = this;
        this.isSuccess = false;
        this.isLoading = true;
        this.dataService.forgotPassword(this.userEmail).subscribe(function (data) {
            _this.isSuccess = true;
            _this.isLoading = false;
        }, function (error) {
            _this.isLoading = false;
            var message = error;
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
            _this.message = message;
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    Component({
        selector: 'forgot-component',
        templateUrl: 'forgot.component.html'
    }),
    __metadata("design:paramtypes", [AccountService,
        Router,
        AuthService])
], ForgotPasswordComponent);
export { ForgotPasswordComponent };
