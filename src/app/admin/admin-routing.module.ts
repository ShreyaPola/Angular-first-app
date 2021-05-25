import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewMobileComponent } from '../add-new-mobile/add-new-mobile.component';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [{ path: '', component: AdminComponent, children:[
  {path:'viewproducts',component:ViewproductsComponent},
  {path:'addNewProducts',component:AddNewMobileComponent},
  {path:'',redirectTo:'/admin/viewproducts',pathMatch:'full'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
