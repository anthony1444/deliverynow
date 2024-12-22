import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../src/environments/environment';

interface User{
  username:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _baseURL:string=`${environment.apiUrl}`;
  private apiKey = environment.apiKey;  // Reemplaza 'TU_CLAVE_AQUI' por tu clave real

  //private _http:HttpClient=Inject(HttpClient);
  constructor(private _http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
  
  public login(user:User):Observable<any>{
    return this._http.post<any>(`${this._baseURL}/login`,user,{ headers: this.getHeaders() })    
  }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-functions-key': this.apiKey
    });
  }
}
