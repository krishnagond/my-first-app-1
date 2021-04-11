import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: 'profile-page.component.html'
})

export class ProfilePageComponent implements OnInit {
 
  user:any;

  userService:UserService;
 
  constructor(userService:UserService, private router:Router) {
  this.userService=userService;
  }

  ngOnInit(): void {
   
   let token = localStorage.getItem('token');
   if(token=="null"){
    this.router.navigate(['logincomponent']);
   }else{
    this.userService.getUser().subscribe(data=>{
      this.user=data; },err=>{
       console.log(err);
     });  
   }

  }

}
