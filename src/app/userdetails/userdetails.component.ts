import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { post } from '../models/posts.model';
import { User } from '../models/user.model';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit,OnDestroy {

  constructor(private ar:ActivatedRoute, private fsobj:FakedataService,private usObj:UserdataService) { }

  mysubscription:Subscription;
  postObj:User;
  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;
    console.log(id);

   /* this.fsobj.getPostByID(id).subscribe(
      (post)=>{
        this.postObj = post;
      },
      (err)=>{
        console.log("err is : ",err);
      }
    );*/

    this.mysubscription=this.usObj.getUserById(id).subscribe(
      (post)=>{
        this.postObj = post;
        console.log(post);
      },
      (err)=>{
        console.log("err is : ",err);
      }
    )
  }

  ngOnDestroy():void{
    this.mysubscription.unsubscribe();
  }

}
