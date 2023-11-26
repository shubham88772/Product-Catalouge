import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { NewUser } from './new-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  _url = 'http://localhost:3000';

  loggedUser:boolean=false;

  constructor(private _http: HttpClient) { }

  authentication(user : User){
    return this._http.post<any>(`${this._url}/user/login`,user);
  }

  registration(newUser : NewUser){
    return this._http.post<any>(`${this._url}/user/register`,newUser);
  }

  displayProducts():Observable<any>{
    return this._http.get<any>(`${this._url}/productcatalog/products`)
  }

  searchResults(keyword:any):Observable<any>{
    return this._http.get<any>(`${this._url}/productcatalog/products/search/name/${keyword}`, keyword)
  }
  searchResults1(keyword:any):Observable<any>{
    return this._http.get<any>(`${this._url}/productcatalog/products/search/brand/${keyword}`, keyword)
  }
  searchResults2(keyword:any):Observable<any>{
    return this._http.get<any>(`${this._url}/productcatalog/products/search/code/${keyword}`, keyword)
  }

  singleProduct(id:any):Observable<any>{
    return this._http.get<any>(`${this._url}/productcatalog/products/${id}`, id);
  }

  availabilty(id:any,pincode:any):Observable<any>{
    return this._http.post<any>(`${this._url}/productcatalog/products/productavailability/${id}/${pincode}`,pincode)
  }

  lowerToHigher(){
    return this._http.get<any>(`${this._url}/l2h`)
  }

  higherToLower(){
    return this._http.get<any>(`${this._url}/h2l`)
  }
  isLoggedIn()
  {
    return this.loggedUser;
  }
}
