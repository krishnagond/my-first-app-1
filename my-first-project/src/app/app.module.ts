import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstComponent,
    SecondComponent,
    SignupComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
