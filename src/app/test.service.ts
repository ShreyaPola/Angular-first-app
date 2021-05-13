import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data:any;

  //to get data from any component
  getData(){
    return this.data;
  }

  //to set data
  setData(val)
  {
    this.data = val;
  }
}
