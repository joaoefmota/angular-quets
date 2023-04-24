import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; // for forms

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.routes';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './signUp/SignUp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SignUpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
