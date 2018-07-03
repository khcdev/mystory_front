import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PortfolioComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', loadChildren: './components/index/index.module#IndexModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
