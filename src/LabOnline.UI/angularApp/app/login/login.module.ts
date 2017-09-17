import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { LoginRoutes } from './login.routes';
import { LoginComponent } from './components/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        LoginRoutes
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule { }