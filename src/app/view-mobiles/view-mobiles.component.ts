import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataService} from '../data.service'
import { Product } from '../models/product.model';
@Component({
  selector: 'app-view-mobiles',
  templateUrl: './view-mobiles.component.html',
  styleUrls: ['./view-mobiles.component.css']
})
export class ViewMobilesComponent implements OnInit {

  mySubscription:Subscription;
  mobiles:Product[] = [];
  constructor(private dsObj:DataService) { }
 
  ngOnInit(): void {
    this.mySubscription = this.dsObj.getMobilesData().subscribe(
      (data)=>{
        this.mobiles=data;
      },
      (err)=>{
        console.log('err is : ',err);
      }
    )
  }

  ngOnDestroy():void {
    this.mySubscription.unsubscribe();
  }

}
