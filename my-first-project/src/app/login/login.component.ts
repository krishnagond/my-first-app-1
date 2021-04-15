import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }
  
  error:boolean=false;
  message:any;
  loginForm:any;
  ngOnInit(): void {
    this.userService.logoutUser().subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });

    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    });
  

  }



  onSubmit() {
this.userService.loginUser(this.loginForm.value).subscribe(data=>{
      if(data.auth==true){
        localStorage.setItem("token",data.token);
        this.router.navigate(['/profilepage']);
      }
    },err=>{
      this.error=true;
     this.message = err.error.text;
     console.log(err);
         });     
  }

  get username(){return this.loginForm.get('username')};

  get password(){return this.loginForm.get('password')};

}
