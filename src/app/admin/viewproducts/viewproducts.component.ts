import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/Mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[] = [];
  editMobileIndex;
  editMobileObj = new Mobile('','','');
  editMobileStatus:boolean=false;
  searchItem:string;
  constructor(private dsObj:DataService) { }

  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles = res;
      },
      err=>{
        console.log('err in reading products to admin module.',err)
      }
    )
  }
  ngOnInit(): void {
    this.getUsers();
  }


  //to edit mobile
  editMobile(mobileObj,idx){
    this.editMobileObj = mobileObj;
    this.editMobileIndex = idx;
    this.editMobileStatus = true;
  }

  //save mobile after edit
  onSave(modifiedMobileObj){
    this.editMobileStatus = false;
    modifiedMobileObj.id  = this.editMobileObj["id"];
    modifiedMobileObj.productImage = this.editMobileObj["productImage"];
    console.log("modiefied Mobile obj = ",modifiedMobileObj);

    this.dsObj.updateMobileData(modifiedMobileObj).subscribe(
      res=>{
        console.log('Updated');
        alert('A mobile data updated');
      },
      err=>
      {
        console.log('err while updating the mobile data',err);
      }
    )
  }


  //delete mobile
  deleteMobile(mobileObj){
    console.log('mobile obj to be deleted is : ',mobileObj.id);
    if(confirm("Do you want to delete the product?")){
    this.dsObj.deleteMobileData(mobileObj.id).subscribe(
      res=>{
        console.log('Deleted');
        alert('A mobile object deleted');
        this.getUsers();
      },
      err=>{
        console.log('Err while delete mobile data',err);
      }
    )
  }
}

 

}
