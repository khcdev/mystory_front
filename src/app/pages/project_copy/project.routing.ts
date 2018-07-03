import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProjectComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
