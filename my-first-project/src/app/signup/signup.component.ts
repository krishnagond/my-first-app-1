import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { 
    this.userService=userService;
  }

  ngOnInit(): void {
  }


  signUpForm = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNo: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  });  

  onSubmit(){
    
    this.userService.postUser(this.signUpForm.value).subscribe(data =>{
      if(data){
      this.router.navigate(['/login-component']);
      }
        },err=>{
      console.log(err);
    })
  }
  

}
