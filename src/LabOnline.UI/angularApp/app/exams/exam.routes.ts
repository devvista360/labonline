import { Routes, RouterModule } from '@angular/router';

import { ExamComponent } from './components/exam.component';
import { ExamDetailComponent } from './components/exam-detail.component';

const routes: Routes = [
    { path: '', component: ExamComponent },
    { path: 'exams/:id', component: ExamComponent },
    { path: 'examdetail/:id', component: ExamDetailComponent },
];

export const ExamRoutes = RouterModule.forChild(routes);