import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../models/Mobile.model';

@Component({
  selector: 'app-add-new-mobile',
  templateUrl: './add-new-mobile.component.html',
  styleUrls: ['./add-new-mobile.component.css']
})
export class AddNewMobileComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel = new Mobile('','','');

  onSubmitNewMobile(){
    this.dsObj.createNewMobile(this.mobileModel).subscribe(
      res=>{
        //navigate to viewMobiles component
        this.router.navigateByUrl('products/mobiles')
      },
      err=>{
        console.log('error in creating new mobile');
      }
    )
  }
}
