import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  ngOnInit(): void {
    this.userService.logoutUser().subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


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
     
      // this.message=err.
    })

  }



}
