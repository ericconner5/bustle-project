import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
