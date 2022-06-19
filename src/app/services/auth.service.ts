import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:3000/users/;";
  constructor(private httpClient:HttpClient) { }


    checkUser(loginModel:LoginModel):Observable<LoginModel>{
      return this.httpClient.get<LoginModel>('http://localhost:3000/users/?eMail='+loginModel.eMail+'&password='+loginModel.password)

  // isAuthenticated(){
  //   if(localStorage.getItem("token")){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

}
}
