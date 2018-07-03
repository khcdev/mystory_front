import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { PortfolioIndexComponent } from './components/index.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: PortfolioIndexComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);