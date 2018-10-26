import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';


import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent} from './app/app.component';
import { NavBarComponent } from './app/nav-bar/nav-bar.component';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
