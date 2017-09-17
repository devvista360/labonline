import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutes } from './exam.routes';
import { ExamComponent } from './components/exam.component';
import { ExamDetailComponent } from './components/exam-detail.component';

@NgModule({
    imports: [
        CommonModule,
        ExamRoutes
    ],
    declarations: [
        ExamComponent,
        ExamDetailComponent
    ],
    exports: [
        ExamComponent,
        ExamDetailComponent
    ]
})

export class ExamModule { }