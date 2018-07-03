import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './index.routing';

/* components */
import { IndexComponent } from './index.component';
import { PortfolioIndexComponent } from './components/index.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        IndexComponent,
        PortfolioIndexComponent,
    ]
})
export class IndexModule { }
