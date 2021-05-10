import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../models/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() productObj:Product; //@input decorator inducates to take info from parent comp and the purpose of variable is to receive the data from parent

  //to create a custom event
  @Output() myEvent = new EventEmitter

  sendProductDetailsToTheParent(prodTitle){
    //emit data to parent
    this.myEvent.emit(prodTitle);
  }

}
