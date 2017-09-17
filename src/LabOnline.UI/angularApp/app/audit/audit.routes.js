import { RouterModule } from '@angular/router';
import { AuditComponent } from './components/audit.component';
var routes = [
    { path: '', component: AuditComponent }
];
export var AuditRoutes = RouterModule.forChild(routes);
