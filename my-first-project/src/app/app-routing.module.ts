import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
const routes: Routes = [
 { path: 'first-component', component: FirstComponent },
 { path: 'second-component', component: SecondComponent },
 {path:'login-component', component:LoginComponent},
 {path:'signup-component', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
