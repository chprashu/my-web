import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CareerComponent } from './components/pages/career/career.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"career", component:CareerComponent},
  {path:"login", component:LoginComponent},
  {path:"order", component:OrderComponent},
  {path:"product", component:ProductsComponent},
  {path:"signup", component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
