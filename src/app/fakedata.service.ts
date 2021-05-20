import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {post} from '../app/models/posts.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class FakedataService {

  //inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<post[]>{
    return this.hc.get<post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostByID(id):Observable<any>{
    return this.hc.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  /*getPosts():Observable<Object>{

    return this.hc.get<Object>('https://reqres.in/api/unknown');
  }*/

  /*getPosts():Observable<any>{
    return this.hc.get<any>('https://jsonplaceholder.typicode.com/users');
  }*///


}
