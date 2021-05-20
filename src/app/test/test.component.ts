import { Component, OnInit , OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import {post} from '../models/posts.model'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {
  mySubscription : Subscription;
  myPosts:post[] = [];
  newPosts
  details:any;
  //inject Fakedata sevice object
  constructor(private fsObjs:FakedataService,private router:Router) { }


  ngOnInit(): void {
    this.mySubscription = this.fsObjs.getPosts().subscribe(
      (postData)=>{
        this.myPosts = postData;
        //console.log(this.myPosts);
      },
      (err)=>{
        console.log("error while printing post data");
      }
    )


    /*this.fsObjs.getPosts().subscribe(
      (postData)=>{
        this.newPosts = postData;
      },
      (err)=>{
        console.log("err is : ",err);
      }
    )*/

    /*this.fsObjs.getPosts().subscribe(
      (dt)=>{
        this.details = dt;
        console.log(this.details);
      },
      (err)=>{
        console.log('err is : ',err);
      }
    )*/

     
  }

  onSelectId(id){
    this.router.navigateByUrl('test/'+id);
  }
  ngOnDestroy():void {
    this.mySubscription.unsubscribe();
  }


}
