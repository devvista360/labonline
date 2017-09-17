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
import { Column } from '../../shared/components/grid/column';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { AuditService } from './../../core/services/audit.service';
import { Configuration } from '../../app.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
var AuditComponent = (function () {
    function AuditComponent(configuration, dataService, router, route, location) {
        this.configuration = configuration;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.isLoading = false;
        this.totalRows = 0;
        this.grid = new GridComponent();
        this.message = '';
    }
    AuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = '';
        this.grid.columns = [
            new Column('created', 'Registro'),
            new Column('user', 'Usuario'),
            new Column('name', 'Nombre'),
            new Column('email', 'Correo'),
            new Column('fromIp', 'IP'),
            new Column('task', 'Actividad')
        ];
        this.route.queryParams.subscribe(function (data) {
            var id = data['id'];
            if (typeof id !== 'undefined' && id !== '') {
                _this.getData(id);
            }
        });
    };
    AuditComponent.prototype.getData = function (id) {
        var _this = this;
        this.isLoading = true;
        this.dataService.getAll(id).subscribe(function (items) {
            _this.isLoading = false;
            _this.totalRows = items.length;
            _this.grid.setRows(items);
        }, function (response) { return _this.handleError(response); });
    };
    AuditComponent.prototype.goBack = function () {
        this.location.back();
    };
    AuditComponent.prototype.handleError = function (response) {
        this.isLoading = false;
        var failure = response;
        switch (response.status ? response.status : 0) {
            case 400:
            case 500:
                var body = response.json();
                if (body) {
                    failure = body.message;
                }
                break;
        }
        this.message = failure;
    };
    return AuditComponent;
}());
AuditComponent = __decorate([
    Component({
        selector: 'audit-component',
        templateUrl: 'audit.component.html'
    }),
    __metadata("design:paramtypes", [Configuration,
        AuditService,
        Router,
        ActivatedRoute,
        Location])
], AuditComponent);
export { AuditComponent };
