import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
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
import { masterFirebaseConfig } from './api-keys';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    ContactUsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
