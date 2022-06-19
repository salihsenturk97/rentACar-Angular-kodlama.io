import { PageBackGuard } from './guards/page-back.guard';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { CarAddPropComponent } from './components/pages/car-add-prop/car-add-prop.component';
import { CarUpdateComponent } from './components/pages/admin/car/car-update/car-update.component';
import { CarAddComponent } from './components/pages/admin/car/car-add/car-add.component';
import { CarAdminComponent } from './components/pages/admin/car/car-admin/car-admin.component';
import { CarListComponent } from './components/pages/car-list/car-list.component';
import { ColorAddComponent } from './components/pages/admin/color/color-add/color-add.component';
import { ColorAdminComponent } from './components/pages/admin/color/color-admin/color-admin.component';
import { BrandUpdateComponent } from './components/pages/admin/brand/brand-update/brand-update.component';
import { BrandAddComponent } from './components/pages/admin/brand/brand-add/brand-add.component';
import { BrandAdminComponent } from './components/pages/admin/brand/brand-admin/brand-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: CarListComponent },
  { path: "car-list", component: CarListComponent },
  { path: "brand-admin", component: BrandAdminComponent, canActivate: [LoginGuard] },
  { path: "brand-add", component: BrandAddComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "brand-update/:id", component: BrandUpdateComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "color-admin", component: ColorAdminComponent, canActivate: [LoginGuard] },
  { path: "color-add", component: ColorAddComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "car-admin", component: CarAdminComponent, canActivate: [LoginGuard] },
  { path: "car-add", component: CarAddComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "car-admin", component: CarAdminComponent, canActivate: [LoginGuard] },
  { path: "car-update/:id", component: CarUpdateComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "brands/:brandId", component: CarListComponent },
  { path: "colors/:colorId", component: CarListComponent},
  { path: "car-add-prop/:id", component: CarAddPropComponent, canActivate: [LoginGuard], canDeactivate: [PageBackGuard] },
  { path: "login", component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
