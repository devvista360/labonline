import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Column } from '../../shared/components/grid/column';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { AccountService } from './../../core/services/account.service';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'user-component',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    public isLoading = false;
    public isNew = false;
    public isEditing = false;
    public message: string;
    public filter = '';
    public totalRows = 0;
    public grid = new GridComponent();
    public user: Person;
    public documentTypes: Array<Object>;
    public userTypes: Array<Object>;

    public constructor(
        private configuration: Configuration,
        private userService: AccountService,
        private router: Router) {
        this.message = '';
    }

    public ngOnInit(): void {
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
    }
    public iniForm(): void {
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
    }
    public create(): void {
        this.iniForm();
        this.isNew = true;
        this.isEditing = false;
    }
    public cancel(): void {
        this.iniForm();
        this.isNew = false;
        this.isEditing = false;
    }
    public add() {
		this.userService.create(this.user).subscribe(
			(response: Response) => {this.iniForm(); this.getPeople(); },
			(error: any) => this.handleError(error));
    }
    public save() {
		this.userService.update(this.user).subscribe(
			(response: Response) => {this.iniForm(); this.getPeople(); },
			(error: any) => this.handleError(error));
    }
    public delete() {
		this.isLoading = true;
		this.message = '';
		this.userService.delete(this.user).subscribe(
		    (response: Response) => {this.iniForm(); this.getPeople(); },
			(error: any) => this.handleError(error));
    }
    public update(): void {
        this.isLoading = true;
        this.message = '';
        this.user.firstName = this.user.firstName.toUpperCase();
        this.user.lastName = this.user.lastName.toUpperCase();

        if (this.user.id) {
            this.save();
        } else {
            this.add();
        }
    }
    public getPeople(): void {
        this.isLoading = true;
        this.userService.getAll(this.filter).subscribe(
			items => {
				this.isLoading = false;
                this.grid.setRows(items);
                this.userService.count().subscribe(value => {
                    this.totalRows = value;
                }, res => this.handleError(res));
			},
			response => this.handleError(response));
    }
    public select(row: any): void {
        let item = <Person>row;
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
    }
    public viewResults(row: any): void {
        let item = <Person>row;
        if (item.userType.toUpperCase().substring(0, 1) != 'S') {
            this.router.navigate(['/exams'], { queryParams: { id: item.id }});
        }
    }
    public viewAudit(row: any): void {
        let item = <Person>row;
        this.router.navigate(['/audit'], { queryParams: { id: item.id }});
    }
    private handleError(response: Response) {
		this.isLoading = false;
		let failure = <any>response;
		switch (response.status ? response.status : 0) {
			case 400:
			case 500:
				let body = response.json();
				if (body) {
					failure = body.message;
				}
				break;
		}
		this.message = failure;
	}
}
