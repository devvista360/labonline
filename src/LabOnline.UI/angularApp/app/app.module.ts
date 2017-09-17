import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { AuthGuard } from './core/services/auth.guard';
import { UserModule } from './users/user.module';
import { AuditModule } from './audit/audit.module';
import { ExamModule } from './exams/exam.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
        LoginModule,
        UserModule,
        AuditModule,
        ExamModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard
    ]
})

export class AppModule { }