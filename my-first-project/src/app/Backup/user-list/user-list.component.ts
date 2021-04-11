import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../beans/userLogin'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',

})
export class UserListComponent implements OnInit {

users:User[]=[];

userService:UserService;

constructor(userService:UserService,private router:Router) { 
  this.userService=userService;
}

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    
    if(token==="null"){
      this.router.navigate(['logincomponent']);
    }else{
      this.userService.getUsers().subscribe(data=>{ 
        this.users=data
      },err=>{
        this.router.navigate(['logincomponent']);
        console.log(err);
      });
    }

  }

}
