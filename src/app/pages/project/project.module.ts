import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './project.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from './project.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        ProjectComponent
    ]
})
export class ProjectModule { }
