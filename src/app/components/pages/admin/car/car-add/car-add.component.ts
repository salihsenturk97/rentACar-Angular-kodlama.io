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
  car: Car = new Car();
  brand: Brand = new Brand()
  color: Color = new Color()
  carAddForm: FormGroup;
  brands: Brand[];
  colors: Color[];
  colorName: Color
  getColorById: Color

  constructor(private carService: CarService, private formBuilder: FormBuilder, private brandService: BrandService, private colorService: ColorService) { }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
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
    this.getBrandByName(this.carAddForm.get("brandName").value)
    this.getColorByName(this.carAddForm.get("colorName").value)
    this.car.brandName = Object.assign({}, this.carAddForm.get("brandName").value);
    this.car.colorName = Object.assign({}, this.carAddForm.get("colorName").value);
    this.car.dailyPrice = Object.assign({}, this.carAddForm.get("dailyPrice").value);
    this.car.description = Object.assign({}, this.carAddForm.get("description").value);

  }

  getBrandByName(name: string) {
    this.brandService.getBrandByname(name).subscribe(data => {
      if (data[0].id) {
        this.car.brandId = data[0].id

      }
    })
  }
  getColorByName(name: string) {
    this.colorService.getColorByname(name).subscribe(data => {
      if (data[0].id) {
        this.car.colorId = data[0].id
      }
    })
  }
}
