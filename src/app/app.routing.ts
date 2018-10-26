import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent} from './nav-bar/nav-bar.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BooksComponent } from './books/books.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DmcaComponent } from './dmca/dmca.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FashionComponent } from './fashion/fashion.component';
import { FeaturesComponent } from './features/features.component';
import { FoodComponent } from './food/food.component';
import { LabsComponent } from './labs/labs.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { NewsComponent } from './news/news.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TechComponent } from './tech/tech.component';
import { TermsComponent } from './terms/terms.component';
import { VideoComponent } from './video/video.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'advertise',
    component: AdvertiseComponent
  },
  {
    path: 'beauty',
    component: BeautyComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'dmca',
    component: DmcaComponent
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent
  },
  {
    path: 'fashion',
    component: FashionComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  },
  {
    path: 'lifestyle',
    component: LifestyleComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'tech',
    component: TechComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
