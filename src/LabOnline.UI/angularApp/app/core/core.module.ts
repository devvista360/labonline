import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from '../app.constants';
import { AccountService } from './services/account.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { AuditService } from './services/audit.service';
import { ExamService } from './services/exam.service';

@NgModule({
    imports: [
        CommonModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                Configuration,
                AccountService,
                AuthService,
                AuthGuard,
                AuditService,
                ExamService
            ]
        };
    }
}