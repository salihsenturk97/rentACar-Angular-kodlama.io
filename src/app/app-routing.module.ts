import { BrandUpdateComponent } from './components/pages/brand-update/brand-update.component';
import { BrandAddComponent } from './components/pages/brand-add/brand-add.component';
import { BrandAdminComponent } from './components/pages/brand-admin/brand-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"brand-admin",component:BrandAdminComponent},
  {path:"brand-add",component:BrandAddComponent},
  {path:"brand-update/:id",component:BrandUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
