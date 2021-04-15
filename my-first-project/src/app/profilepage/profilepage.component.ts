import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any;
  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
     this.user = new Object(data);
     console.log(this.user);
    }, err=>{
      console.log(err);
    })

  }


}
