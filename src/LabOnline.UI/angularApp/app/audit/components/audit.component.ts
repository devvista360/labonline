import { Component, OnInit } from '@angular/core';
import { Audit } from '../../models/audit';
import { Column } from '../../shared/components/grid/column';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { AuditService } from './../../core/services/audit.service';
import { Response } from '@angular/http';
import { Configuration } from '../../app.constants';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';

@Component({
    selector: 'audit-component',
    templateUrl: 'audit.component.html'
})

export class AuditComponent implements OnInit {

    public isLoading = false;
    public message: string;
    public totalRows = 0;
    public grid = new GridComponent();

    public constructor(
        private configuration: Configuration,
        private dataService: AuditService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location) {
        this.message = '';
    }

    public ngOnInit(): void {
        this.message = '';
        this.grid.columns = [
            new Column('created', 'Registro'),
			new Column('user', 'Usuario'),
			new Column('name', 'Nombre'),
			new Column('email', 'Correo'),
			new Column('fromIp', 'IP'),
            new Column('task', 'Actividad')
        ];
        this.route.queryParams.subscribe(data => {
            const id = data['id'];
            if (typeof id !== 'undefined' && id !== '') {
                this.getData(id);
            }
        });
    }
    public getData(id: string): void {
        this.isLoading = true;
        this.dataService.getAll(id).subscribe(
			items => {
				this.isLoading = false;
                this.totalRows = items.length;
                this.grid.setRows(items);
			},
			response => this.handleError(response));
    }
    public goBack() {
        this.location.back();
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
