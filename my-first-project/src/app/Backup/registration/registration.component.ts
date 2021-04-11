import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
 
})

export class RegistrationComponent implements OnInit {
 
  userService:UserService;
 
  constructor(userService:UserService, private router:Router) {
    this.userService=userService;
  }

  registrationForm = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    username:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit(){
  console.log(this.registrationForm.value);  
  this.userService.postUser(this.registrationForm.value).subscribe(data=>{
    this.router.navigate(['logincomponent']);
  });

  }
}
