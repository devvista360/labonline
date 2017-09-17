import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';
var routes = [
    { path: '', component: LoginComponent }
];
export var LoginRoutes = RouterModule.forChild(routes);
