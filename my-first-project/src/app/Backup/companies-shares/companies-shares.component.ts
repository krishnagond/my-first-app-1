import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stocks } from '../beans/stocks';
import { UploadService } from '../services/upload.service'
@Component({
  selector: 'app-companies-shares',
  templateUrl: 'companies-shares.component.html',
  
})

export class CompaniesSharesComponent implements OnInit {

  stocks:Stocks[]=[];

  constructor(private router:Router, private stock:UploadService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    if(token==="null"){
      this.router.navigate(['logincomponent']);
    }else{
    this.stock.getStockList().subscribe(data=>{
      this.stocks=data;
     
    },err=>{
      console.log(err);
    })  
    }
  }
}
