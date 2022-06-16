import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Car } from './../../../../../models/car';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  car: Car;
  brand: Brand
  color: Color
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  colorName: Color
  colorId: number;
  getColorById: Color

  constructor(private carService: CarService, private formBuilder: FormBuilder, private brandService: BrandService, private colorService: ColorService) { }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: [""],
      colorId: [""],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
      colorName: ["", Validators.required],
      brandName: ["", Validators.required]

    })
  }
  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrand();
    this.getColor();
  }
  getBrand() {
    this.brandService.getBrand().subscribe(data => {
      this.brands = data;
    })
  }
  getColor() {
    this.colorService.getColor().subscribe(data => {
      this.colors = data;
    })
  }
  addCar() {
    let selectedBrand = this.brands.find(element => element.id == this.carAddForm.value.brandName);
    let selectedColor = this.colors.find(element => element.id == this.carAddForm.value.colorName);
    this.carAddForm.value.brandName = selectedBrand.name;
    this.carAddForm.value.colorName = selectedColor.colorName;
    this.car = Object.assign({}, this.carAddForm.value);



  }




}
