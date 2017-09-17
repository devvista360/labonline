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
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Configuration } from '../../app.constants';
import { AuthGuard } from './auth.guard';
var AuditService = (function () {
    function AuditService(http, configuration, authGuard) {
        this.http = http;
        this.configuration = configuration;
        this.authGuard = authGuard;
        this.actionUrl = configuration.Server + 'api/audit/';
    }
    AuditService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.authGuard.getToken() });
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    AuditService.prototype.getAll = function (id) {
        var options = new RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(this.actionUrl + 'getall/' + id, options)
            .map(function (res) {
            var items = res.json();
            return items;
        });
    };
    return AuditService;
}());
AuditService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Configuration,
        AuthGuard])
], AuditService);
export { AuditService };
