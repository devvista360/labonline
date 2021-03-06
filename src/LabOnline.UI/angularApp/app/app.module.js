var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/services/auth.guard';
import { UserModule } from './users/user.module';
import { AuditModule } from './audit/audit.module';
import { ExamModule } from './exams/exam.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
