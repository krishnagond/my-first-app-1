import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthinterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    request = request.clone({setHeaders:{authorization:''+localStorage.getItem('token')}});
    return next.handle(request);
  }

}

export const AuthinterceptorServiceProvider = {provide: HTTP_INTERCEPTORS,
  useClass: AuthinterceptorService,
  multi: true};
