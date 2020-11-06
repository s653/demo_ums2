import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  saveUser(users:any = []){
    return this.http.put('https://crudtest-add16.firebaseio.com/users.json',users)
  }
}
