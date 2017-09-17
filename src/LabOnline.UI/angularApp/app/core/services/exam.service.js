var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Configuration } from '../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { AuthService } from './auth.service';
var ExamService = (function () {
    function ExamService(http, configuration, authService) {
        this.http = http;
        this.configuration = configuration;
        this.authService = authService;
        this.actionUrl = 'api/exams/';
        this.actionUrl = configuration.Server + 'api/exams/';
        var currentUser = authService.getToken();
        this.token = (currentUser && currentUser.token) || null;
        this.modifiedBy = (currentUser && currentUser.userId) || null;
        this.headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        this.headers.append('Content-Type', 'application/json');
    }
    ExamService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    ExamService.prototype.getExams = function (actionName, year, documentType, documentId, patientId) {
        var apiUrl = this.actionUrl + actionName + '/' + year;
        var params = new URLSearchParams();
        switch (actionName.toLowerCase()) {
            case 'organization':
                patientId = patientId.length == 0 ? '*' : patientId;
                apiUrl = apiUrl + '/' + documentId + '/' + patientId;
                break;
            case 'doctor':
            case 'patient':
            default:
                apiUrl = apiUrl + '/' + documentType + '/' + documentId;
                break;
        }
        var options = new RequestOptions({
            headers: this.headers
        });
        return this.http.get(apiUrl, options)
            .map(function (response) {
            var items = response.json();
            return items;
        });
    };
    ExamService.prototype.getPdfExam = function (examId, code) {
        var options = new RequestOptions({
            headers: this.headers
        });
        return this.http.get(this.actionUrl + 'Pdf/' + examId + '/' + code)
            .map(function (response) { return response.json(); });
    };
    return ExamService;
}());
ExamService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Configuration,
        AuthService])
], ExamService);
export { ExamService };
