import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../beans/userLogin';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:3000/';  

  constructor(
    private http: HttpClient) { }

    /** GET heroes from the server */
getUsers(): Observable<User[]> {  
  return this.http.get<User[]>(this.userUrl+'users');
}

postUser(User:User):Observable<User>{
  return this.http.post<User>(this.userUrl+'user',User)
}

getUser():Observable<User>{
  return this.http.get<User>(this.userUrl+'user');
}


loginUser(data:any):Observable<any>{
  return this.http.post<any>(this.userUrl+'login',data);
}

logoutUser():Observable<any>{
localStorage.setItem('token','');
return this.http.get<any>(this.userUrl+'logout');
}

}
