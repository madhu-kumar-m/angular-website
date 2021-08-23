import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { CourseComponent } from './components/course/course.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    AboutContentComponent,
    CourseComponent,
    CourseContentComponent,
    ContactComponent,
    ContactContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
