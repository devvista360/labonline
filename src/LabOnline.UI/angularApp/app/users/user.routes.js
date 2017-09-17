import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user.component';
import { ChangePasswordComponent } from './components/change.component';
import { ForgotPasswordComponent } from './components/forgot.component';
import { ResetPasswordComponent } from './components/reset.component';
var routes = [
    { path: '', component: UserComponent },
    { path: 'changepsw', component: ChangePasswordComponent },
    { path: 'forgot', component: ForgotPasswordComponent },
    { path: 'resetpwd/:id', component: ResetPasswordComponent }
];
export var UserRoutes = RouterModule.forChild(routes);
