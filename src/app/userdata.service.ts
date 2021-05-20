import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../app/models/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private hc:HttpClient) { 
  }

  getUserData():Observable<User[]>
  {
    return this.hc.get<User[]>('http://localhost:3000/users');
  }

  getUserById(id):Observable<User>{
    return this.hc.get<User>('http://localhost:3000/users/'+id);
  }
}

