import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GridComponent } from './components/grid/grid.component';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualValidator } from './directives/equal-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavigationComponent,
        CustomFooterComponent,
        GridComponent,
        EqualValidator
    ],
    exports: [
        NavigationComponent,
        CustomFooterComponent,
        GridComponent,
        EqualValidator
    ]
})

export class SharedModule { }