import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { DetailsComponent } from '../details/details.component';
import { BrandComponent } from '../brand/brand.component';
import { CtegoryComponent } from '../ctegory/ctegory.component';
import { ReviewComponent } from '../review/review.component';
import { AuthorComponent } from '../author/author.component';
import { AllComponent } from '../all/all.component';


const routes: Routes = [
  { path: 'products', 
  component: ProductComponent, 
  children: [
    { path: 'details/:id', component: DetailsComponent },
    { path: 'brand/:id', component: BrandComponent },
    { path: 'category/:id', component: CtegoryComponent}
  ]
  },
  { path: 'reviews', 
  component: ReviewComponent, 
  children: [
    { path: 'details/:id', component: DetailsComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllComponent}
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
