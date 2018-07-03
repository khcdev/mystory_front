import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './write.routing';

/* components */
import { WriteComponent } from './write.component';
import { PortfolioWriteComponent } from './components/write.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        WriteComponent,
        PortfolioWriteComponent,
    ]
})
export class WriteModule { }
