import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

export const routes: Routes = [
    { path: 'audit', loadChildren: './audit/audit.module#AuditModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'about', loadChildren: './about/about.module#AboutModule', canActivate: [AuthGuard] },
    { path: 'users', loadChildren: './users/user.module#UserModule', canActivate: [AuthGuard] },
    { path: 'exams', loadChildren: './exams/exam.module#ExamModule', canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
