import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../beans/userLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})



export class LoginComponent implements OnInit  {
  
  constructor(private UserService:UserService, private router:Router) { }  
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  onSubmit() {
   this.UserService.loginUser(this.loginForm.value).subscribe( data=>{
     if(data){
      localStorage.setItem('token',data.token); 
      this.router.navigate(['userProfile'],{state:{data:data}});
     }else{
       this.router.navigate(['logincomponent']);
     }
   });
  }
}
