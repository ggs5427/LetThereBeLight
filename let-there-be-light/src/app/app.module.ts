import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivitiesModule } from './activities/activities.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    ActivitiesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
