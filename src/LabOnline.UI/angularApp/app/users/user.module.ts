import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user.routes';
import { UserComponent } from './components/user.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChangePasswordComponent } from './components/change.component';
import { EqualValidator } from '../shared/directives/equal-validator.directive';
import { ForgotPasswordComponent } from './components/forgot.component';
import { ResetPasswordComponent } from './components/reset.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutes,
        FormsModule,
        HttpModule
    ],
    declarations: [
        UserComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ],
    exports: [
        ChangePasswordComponent,
        UserComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ]
})

export class UserModule { }