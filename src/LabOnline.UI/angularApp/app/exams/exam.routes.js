import { RouterModule } from '@angular/router';
import { ExamComponent } from './components/exam.component';
import { ExamDetailComponent } from './components/exam-detail.component';
var routes = [
    { path: '', component: ExamComponent },
    { path: 'exams/:id', component: ExamComponent },
    { path: 'examdetail/:id', component: ExamDetailComponent },
];
export var ExamRoutes = RouterModule.forChild(routes);
