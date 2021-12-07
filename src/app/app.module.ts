import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { BrandComponent } from './brand/brand.component';
import { AuthorComponent } from './author/author.component';
import { CtegoryComponent } from './ctegory/ctegory.component';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    BrandComponent,
    AuthorComponent,
    CtegoryComponent,
    DetailsComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
