import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  styleUrls: ['sidenavbar.component.css'],
  templateUrl: 'sidenavbar.component.html',
})
export class SidenavbarComponent implements OnDestroy,  OnInit  {
  userService:UserService;
  mobileQuery: MediaQueryList;

  

  constructor(userService:UserService,private router:Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.userService=userService;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {    
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if(token=="null"){
      this.router.navigate(['logincomponent']);
    }
  }

  
  logout(){
   let token = localStorage.getItem("token");
    if(token=="null"){
      this.router.navigate(['logincomponent']);
    }else{
      this.userService.logoutUser().subscribe(data=>{
      localStorage.setItem('token',data.token); 
      
    },err=>{
      console.log(err);
    });
  }

  this.router.navigate(['logincomponent']);

  }


}
