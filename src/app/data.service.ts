import { Injectable } from '@angular/core';
import { Product} from './models/product.model'
import { HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root' //root injector
})
export class DataService {

  
  /*
    <Static data>
    mobiles:Product[] = [
    {
    productTitle:"Mobile-1",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.kickmobiles.com/images/thumbs/0017277_samsung-galaxy-a7-2018_808.jpeg"
    },
    {
    productTitle:"Mobile-2",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.kickmobiles.com/images/thumbs/0017277_samsung-galaxy-a7-2018_808.jpeg"
    },
    {
    productTitle:"Mobile-3",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg"
    },
    
    {
    productTitle:"Mobile-4",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.gizmochina.com/wp-content/uploads/2019/05/oneplus_7_pro--500x500.jpg"
    },
    {
      productTitle:"Mobile-5",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg"
    },
    {
      productTitle:"Mobile-6",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-500x500.jpg"
    },
  ]
  getMobilesData():Product[] {
    return this.mobiles;
  }*/

  //inject HttpCliet service object
  constructor(private hc:HttpClient) { }

  getMobilesData():Observable<Product[]> {

    //http get
    return this.hc.get<Product[]>("assets/mobiles.json")
  }
    

}
