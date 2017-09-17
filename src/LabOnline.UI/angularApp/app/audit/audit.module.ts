import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutes } from './audit.routes';
import { AuditComponent } from './components/audit.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        AuditRoutes,
        FormsModule,
        HttpModule
    ],

    declarations: [
        AuditComponent
    ],
    exports: [
        AuditComponent
    ]
})

export class AuditModule { }