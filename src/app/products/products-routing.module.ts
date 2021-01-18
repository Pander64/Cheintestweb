import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', // Products
    component: ProductsComponent,
    children: [
      {
        path: '', // /productlist component
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list', //products/list
        component: ProductListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
