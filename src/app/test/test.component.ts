import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import {post} from '../models/posts.model'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myPosts:post[] = [];
  newPosts
  details:any;
  //inject Fakedata sevice object
  constructor(private fsObjs:FakedataService) { }


  ngOnInit(): void {
    /*this.fsObjs.getPosts().subscribe(
      (postData)=>{
        this.myPosts = postData;
        //console.log(this.myPosts);
      },
      (err)=>{
        console.log("error while printing post data");
      }
    )*/

    
    /*this.fsObjs.getPosts().subscribe(
      (postData)=>{
        this.newPosts = postData;
      },
      (err)=>{
        console.log("err is : ",err);
      }
    )*/

    this.fsObjs.getPosts().subscribe(
      (dt)=>{
        this.details = dt;
        console.log(this.details);
      },
      (err)=>{
        console.log('err is : ',err);
      }
    )
  }


}
