import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from './../../../services/cart.service';
import { CarProperty } from './../../../models/carProperty';
import { Car } from './../../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-car-add-prop',
  templateUrl: './car-add-prop.component.html',
  styleUrls: ['./car-add-prop.component.css'],
  providers: [CarService, CartService, FormBuilder]
})
export class CarAddPropComponent implements OnInit {

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private cartService: CartService, private formBuilder: FormBuilder) { }
  car: Car
  carProps: CarProperty[]
  carProp: CarProperty
  carPropForm: FormGroup
  isCheck: boolean = false
  cart: CartItem
  carId:Car;

  ngOnInit(): void {
    this.getCarDetail()
    this.getCarProps()
    this.createCarPropForm()
  }



  createCarPropForm() {
    this.carPropForm = this.formBuilder.group({
      name: [""]
    })
  }

  addCarProp() {
    if (this.carPropForm.valid) {
      this.carProps = Object.assign({}, this.carPropForm.value)
    }
  }
  getCarDetail() {

    this.carService.getCar().subscribe(data => {
      this.activatedRoute.params.subscribe(param => {
        if (param["id"]) {
          this.car = data.find(data => data.id == param["id"]);
        }
      })
    })
  }





  getCarProps() {
    this.cartService.getCarProps().subscribe(data => {
      this.carProps = data
    })
  }

  onChange(isChecked) {
    // const id = $event.target.value
    // const isChecked = $event.target.checked
    // this.carProp.isChecked = isChecked
    // this.carProp.id = $event.target.value
    // this.carProp.name = $event.target.name

    //console.log($event)
    console.log(isChecked)
    if (isChecked) {

    }

  }

}
