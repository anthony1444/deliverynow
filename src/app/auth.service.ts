import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
  username:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _baseURL:string="https://deliveryfunction.azurewebsites.net/api";

  //private _http:HttpClient=Inject(HttpClient);
  constructor(private _http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
  
  public login(user:User):Observable<any>{
    return this._http.post<any>(`${this._baseURL}/login`,user)    
  }
}
