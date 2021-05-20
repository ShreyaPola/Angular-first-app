import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {UserdataService} from '../userdata.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {


  mySubscription:Subscription;
  myUsers:User[]=[];
  constructor(private udObj:UserdataService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription = this.udObj.getUserData().subscribe(
      (user)=>{
        this.myUsers = user;
      },
      (err)=>{
        console.log("err = ",err);
      }
    )
  }

  printUserdata(id){
    this.router.navigateByUrl('userdetails/'+id);
  }
  ngOnDestroy():void{
    this.mySubscription.unsubscribe();
  }

}
