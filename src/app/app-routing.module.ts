import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewMobileComponent } from './add-new-mobile/add-new-mobile.component';
import { AdminGuard } from './admin.guard';
import { BikesComponent } from './bikes/bikes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewMobilesComponent } from './view-mobiles/view-mobiles.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'user',component:UserComponent},
  {path:'userdetails/:id',component:UserdetailsComponent},
  {path: 'test' , component:TestComponent},
  {path: 'test/:id',component:UserdetailsComponent},
  {path:'products', component:ProductsComponent, children:[
    {path:'mobiles', component:MobilesComponent,children:[
      {path:'viewMobiles',component:ViewMobilesComponent},
      {path:'addNewMobile', component:AddNewMobileComponent},
      {path:'',redirectTo:'/products/mobiles/viewMobiles',pathMatch:'full'}
    ]},
    {path:'bikes', component: BikesComponent},
    {path:'televisions',component: TelevisionsComponent},
    {path: '',redirectTo:'/products/mobiles/viewMobiles',pathMatch: 'full'}
  ]},
  {path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AdminGuard]},
  {path: '**' ,component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
