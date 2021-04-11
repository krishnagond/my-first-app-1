import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: 'second.component.html',
})
export class SecondComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if(token==="null"){
      this.router.navigate(['logincomponent']);
    }
  }

}
