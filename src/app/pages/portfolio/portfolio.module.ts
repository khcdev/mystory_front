import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './portfolio.routing';
import { SharedModule } from '../../shared/shared.module';

import { IndexComponent } from './components/index/index.component';
import { PortfolioIndexComponent } from './components/index/components/index.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        IndexComponent,
        PortfolioIndexComponent
    ]
})
export class PortfolioModule { }
