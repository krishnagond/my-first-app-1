import { Component, OnInit } from '@angular/core';
import { User } from '../beans/userLogin';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

    users:User[]=[];

  constructor(private userService:UserService) { 
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    },err=>{
      console.log(err);
    })
  }

}
