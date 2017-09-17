var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.isAuthenticated = function () {
        var user = this.getToken();
        if (user) {
            var expiresDate = new Date(user.expiresDate);
            var now = new Date();
            if (now.getTime() < expiresDate.getTime()) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.getUserType = function () {
        var user = this.getToken();
        if (user) {
            return user.username.split('-')[0];
        }
        return '';
    };
    AuthService.prototype.getUserName = function () {
        var user = this.getToken();
        if (user) {
            return user.fullName;
        }
        return '';
    };
    AuthService.prototype.getUserIds = function () {
        var user = this.getToken();
        if (user) {
            return user.username;
        }
        return '';
    };
    AuthService.prototype.getUserId = function () {
        var user = this.getToken();
        if (user) {
            return user.userId;
        }
        return '';
    };
    AuthService.prototype.getToken = function () {
        var data = localStorage.getItem('user');
        if (data) {
            var user = JSON.parse(data);
            return user;
        }
        return data;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router])
], AuthService);
export { AuthService };
