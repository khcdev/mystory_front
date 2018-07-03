import { Routes, RouterModule } from '@angular/router';
import { WriteComponent } from './write.component';
import { PortfolioWriteComponent } from './components/write.component';

const childRoutes: Routes = [
    {
        path: 'write',
        component: WriteComponent,
        children: [
            { path: '', redirectTo: 'write', pathMatch: 'full' },
            { path: 'write', component: PortfolioWriteComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);