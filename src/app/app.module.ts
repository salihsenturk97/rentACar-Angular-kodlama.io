import { BrandAdminComponent } from './components/pages/brand-admin/brand-admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NaviComponent } from './common/navi/navi.component';
import { BrandCategoryComponent } from './common/categories/brand-category/brand-category.component';
import { BrandAddComponent } from './components/pages/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/pages/brand-update/brand-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandCategoryComponent,
    BrandAdminComponent,
    BrandAddComponent,
    BrandUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
