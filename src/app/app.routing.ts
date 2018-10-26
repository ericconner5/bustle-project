import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
