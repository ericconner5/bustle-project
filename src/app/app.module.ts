import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BeautyComponent } from './beauty/beauty.component';
import { FashionComponent } from './fashion/fashion.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { BooksComponent } from './books/books.component';
import { TechComponent } from './tech/tech.component';
import { FoodComponent } from './food/food.component';
import { FeaturesComponent } from './features/features.component';
import { VideoComponent } from './video/video.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { AppsComponent } from './apps/apps.component';
import { LabsComponent } from './labs/labs.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DmcaComponent } from './dmca/dmca.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewsComponent,
    EntertainmentComponent,
    BeautyComponent,
    FashionComponent,
    LifestyleComponent,
    BooksComponent,
    TechComponent,
    FoodComponent,
    FeaturesComponent,
    VideoComponent,
    AboutUsComponent,
    AdvertiseComponent,
    AppsComponent,
    LabsComponent,
    TermsComponent,
    PrivacyComponent,
    DmcaComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,  //these get turned back on soon
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
