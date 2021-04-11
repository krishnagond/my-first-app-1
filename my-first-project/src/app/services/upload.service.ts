import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUser:string="http://localhost:3000/uploadFile/";

  constructor(private http:HttpClient) { }

  public upload(data:any):Observable<any>{
    return this.http.post<any>(this.baseUser,data);
  }

  public getStockList():Observable<any>{
    return this.http.get<any>(this.baseUser);
  }

}
