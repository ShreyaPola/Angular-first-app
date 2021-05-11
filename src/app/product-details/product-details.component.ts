import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../models/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() productObj:Product; //@input decorator indicates to take info from parent comp and the purpose of variable is to receive the data from parent

  //to create a custom event
  @Output() myEvent = new EventEmitter
  @Output() delEvent = new EventEmitter
   cnt:number = 0;
  sendProductDetailsToTheParent(prodTitle){
    //emit data to parent
    this.myEvent.emit(prodTitle);
    this.cnt = this.cnt+1;
  }

  deleteProductDetailsToTheParent(prodTitle)
  {
    //emit data to parent
    this.delEvent.emit(prodTitle);
    if(this.cnt > 0)
      this.cnt = this.cnt - 1;
  }

}
