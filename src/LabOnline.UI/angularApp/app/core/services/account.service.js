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
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Configuration } from '../../app.constants';
var AccountService = (function () {
    function AccountService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.actionUrl = configuration.Server + 'api/people/';
        this.tokenUrl = configuration.Server + 'token';
        var currentUser = this.getToken();
        this.token = (currentUser && currentUser.token) || null;
        this.modifiedBy = (currentUser && currentUser.userId) || null;
    }
    AccountService.prototype.getLoginHeaders = function () {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Cache-Control', 'no-cache');
        return headers;
    };
    AccountService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        var args = new URLSearchParams();
        args.append('username', username);
        args.append('password', password);
        var params = args.toString();
        return this.http.post(this.tokenUrl, params, { headers: this.getLoginHeaders() })
            .map(function (res) {
            var data = res.json();
            if (data) {
                _this.token = data.AccessToken;
                var currentDate = new Date();
                var expiresDate = new Date(currentDate.getTime() + ((data.ExpiresIn / 60) * 60 * 1000));
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    token: data.AccessToken,
                    expiresDate: expiresDate,
                    userId: data.UserId,
                    fullName: data.FullName
                }));
                return true;
            }
            return false;
        });
    };
    AccountService.prototype.getAll = function (filter) {
        var params = new URLSearchParams();
        params.set('searchCondition', filter);
        var options = new RequestOptions({
            headers: this.getHeaders(),
            search: params
        });
        return this.http.get(this.actionUrl + 'all/', options)
            .map(function (res) {
            var items = res.json();
            return items;
        });
    };
    AccountService.prototype.get = function (id) {
        var params = new URLSearchParams();
        params.set('id', id);
        var options = new RequestOptions({
            headers: this.getHeaders(),
            search: params
        });
        return this.http.get(this.actionUrl + 'one/', options)
            .map(function (res) {
            var item = res.json();
            return item;
        });
    };
    AccountService.prototype.count = function () {
        var options = new RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(this.actionUrl + 'count/', options)
            .map(function (res) {
            var item = res.json();
            return item;
        });
    };
    AccountService.prototype.create = function (user) {
        user.id = '00000000-0000-0000-0000-000000000000';
        user.updatedBy = this.modifiedBy;
        var entity = JSON.stringify(user);
        user.id = null;
        var options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.post(this.actionUrl + 'add/', entity, options)
            .map(function (res) {
            return res.json();
        });
    };
    AccountService.prototype.update = function (user) {
        user.updatedBy = this.modifiedBy;
        var entity = JSON.stringify(user);
        var options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.put(this.actionUrl + 'update/' + user.id, entity, options)
            .map(function (res) {
            return res.json();
        });
    };
    AccountService.prototype.delete = function (user) {
        var options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.delete(this.actionUrl + 'delete/' + user.id + '.' + this.modifiedBy, options)
            .map(function (res) {
            return res.json();
        });
    };
    AccountService.prototype.confirmEmail = function (userId) {
        var body = JSON.stringify({ 'userId': userId });
        return this.http
            .post(this.actionUrl + 'confirmEmail', body, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.forgotPassword = function (email) {
        var body = JSON.stringify({ 'email': email });
        return this.http
            .post(this.actionUrl + 'forgotPassword', body, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.validateResetToken = function (token) {
        var data = JSON.stringify({ 'userId': token });
        return this.http
            .post(this.actionUrl + 'validateresettoken', data, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.resetPassword = function (userId, password) {
        var body = JSON.stringify({ 'userId': userId, 'password': password, 'confirmPassword': password });
        return this.http
            .post(this.actionUrl + 'resetpassword', body, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.changePassword = function (userId, currentPassword, password) {
        var body = JSON.stringify({ 'userId': userId, 'currentPassword': currentPassword, 'password': password });
        return this.http
            .post(this.actionUrl + 'changepassword', body, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.getToken = function () {
        var data = localStorage.getItem('user');
        if (data) {
            return JSON.parse(data);
        }
        return data;
    };
    return AccountService;
}());
AccountService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Configuration])
], AccountService);
export { AccountService };
