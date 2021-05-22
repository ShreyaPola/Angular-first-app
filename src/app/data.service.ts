import { Injectable } from '@angular/core';
import { Product} from './models/product.model'
import { HttpClient}  from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { Mobile } from './models/Mobile.model';
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

  getMobilesData():Observable<Mobile[]> {
    //http get
    return this.hc.get<Mobile[]>("http://localhost:3000/mobiles")
  }
    
  // to save/create new mobile
  createNewMobile(mobileObj):Observable<any>{
    return this.hc.post('http://localhost:3000/mobiles',mobileObj)
  }

  //to update mobile
  updateMobileData(modifiedMobileObj):Observable<any>{
    return this.hc.put('http://localhost:3000/mobiles/'+modifiedMobileObj.id,modifiedMobileObj);
  }

  //to delete a mobile data
  deleteMobileData(idx):Observable<any>{
    console.log("inside data service id = ",idx)
    return this.hc.delete('http://localhost:3000/mobiles/'+idx);
  }
}
