import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  error:boolean=false;
  message:any;
  signUpForm:any;

  ngOnInit(): void {
  this.signUpForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    firstName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{10}$"),Validators.maxLength(10), Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(6)]),
    password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    rePassword: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(30)])
  }); 
  }


  


  onSubmit(){

    if(this.signUpForm.get('password').value!==this.signUpForm.get('rePassword').value){      
      console.log(this.signUpForm.get('password'));console.log(this.signUpForm.get('rePassword'));

      this.message="Password does not match";
      this.error=true;

    }else{

      this.userService.postUser(this.signUpForm.value).subscribe(data =>{
        if(data){
        this.router.navigate(['/login-component']);
        }
          },err=>{
        console.log(err);
      });
  
  



    }
  }

  
    get username(){return this.signUpForm.get('username')};

    get password(){return this.signUpForm.get('password')};
    
    get firstName(){return this.signUpForm.get('firstName')};

    get lastName(){return this.signUpForm.get('lastName')};
  
    get email(){return this.signUpForm.get('email')};

    get mobileNo(){return this.signUpForm.get('mobileNo')};
  
    get rePassword(){return this.signUpForm.get('rePassword')};
  
    

}
