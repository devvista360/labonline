import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './components/audit.component';

const routes: Routes = [
    { path: '', component: AuditComponent }
];

export const AuditRoutes = RouterModule.forChild(routes);