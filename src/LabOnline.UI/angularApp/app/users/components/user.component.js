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
import { AccountService } from './../../core/services/account.service';
import { Configuration } from '../../app.constants';
import { Router } from '@angular/router';
var UserComponent = (function () {
    function UserComponent(configuration, userService, router) {
        this.configuration = configuration;
        this.userService = userService;
        this.router = router;
        this.isLoading = false;
        this.isNew = false;
        this.isEditing = false;
        this.filter = '';
        this.totalRows = 0;
        this.grid = new GridComponent();
        this.message = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.grid.columns = [
            new Column('firstName', 'Nombres'),
            new Column('lastName', 'Apellidos'),
            new Column('nationalId', 'Documento'),
            new Column('email', 'Correo'),
            new Column('state', 'Cuenta'),
            new Column('lastActivity', 'Creación'),
            new Column('userType', 'Tipo Usuario')
        ];
        this.getPeople();
        this.iniForm();
    };
    UserComponent.prototype.iniForm = function () {
        this.user = {
            id: null,
            nationalId: '',
            documentType: 'CC',
            documentId: '',
            firstName: '',
            lastName: '',
            email: '',
            userType: 'P',
            isActive: true,
            isConfirmed: true,
            isResetPassword: false,
            state: '',
            isSendMail: false,
            lastActivity: null,
            details: null
        };
        this.documentTypes = this.configuration.IdTypes;
        this.userTypes = this.configuration.UserTypes;
        this.isNew = false;
        this.isEditing = false;
        this.isLoading = false;
        this.message = '';
    };
    UserComponent.prototype.create = function () {
        this.iniForm();
        this.isNew = true;
        this.isEditing = false;
    };
    UserComponent.prototype.cancel = function () {
        this.iniForm();
        this.isNew = false;
        this.isEditing = false;
    };
    UserComponent.prototype.add = function () {
        var _this = this;
        this.userService.create(this.user).subscribe(function (response) { _this.iniForm(); _this.getPeople(); }, function (error) { return _this.handleError(error); });
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        this.userService.update(this.user).subscribe(function (response) { _this.iniForm(); _this.getPeople(); }, function (error) { return _this.handleError(error); });
    };
    UserComponent.prototype.delete = function () {
        var _this = this;
        this.isLoading = true;
        this.message = '';
        this.userService.delete(this.user).subscribe(function (response) { _this.iniForm(); _this.getPeople(); }, function (error) { return _this.handleError(error); });
    };
    UserComponent.prototype.update = function () {
        this.isLoading = true;
        this.message = '';
        this.user.firstName = this.user.firstName.toUpperCase();
        this.user.lastName = this.user.lastName.toUpperCase();
        if (this.user.id) {
            this.save();
        }
        else {
            this.add();
        }
    };
    UserComponent.prototype.getPeople = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.getAll(this.filter).subscribe(function (items) {
            _this.isLoading = false;
            _this.grid.setRows(items);
            _this.userService.count().subscribe(function (value) {
                _this.totalRows = value;
            }, function (res) { return _this.handleError(res); });
        }, function (response) { return _this.handleError(response); });
    };
    UserComponent.prototype.select = function (row) {
        var item = row;
        this.user = {
            id: item.id,
            nationalId: '',
            documentType: item.documentType,
            documentId: item.documentId,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            userType: item.userType.toUpperCase().substring(0, 1),
            isActive: item.isActive,
            isConfirmed: item.isConfirmed,
            isResetPassword: item.isResetPassword,
            state: item.state,
            isSendMail: item.isSendMail,
            lastActivity: item.lastActivity,
            details: item.details
        };
        this.isNew = false;
        this.isEditing = true;
    };
    UserComponent.prototype.viewResults = function (row) {
        var item = row;
        if (item.userType.toUpperCase().substring(0, 1) != 'S') {
            this.router.navigate(['/exams'], { queryParams: { id: item.id } });
        }
    };
    UserComponent.prototype.viewAudit = function (row) {
        var item = row;
        this.router.navigate(['/audit'], { queryParams: { id: item.id } });
    };
    UserComponent.prototype.handleError = function (response) {
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
    return UserComponent;
}());
UserComponent = __decorate([
    Component({
        selector: 'user-component',
        templateUrl: 'user.component.html'
    }),
    __metadata("design:paramtypes", [Configuration,
        AccountService,
        Router])
], UserComponent);
export { UserComponent };
