import { CartItems } from './../../../models/cartItems';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarProperty } from './../../../models/carProperty';
import { Car } from './../../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cartItem';
import { CarProp } from 'src/app/models/carProp';

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
  selectedCarProps: CarProperty[] = []
  carProp: CarProperty
  carPropForm: FormGroup
  isCheck: boolean = false
  carId:Car;
  cartItems: CartItem[] = []
  carPropsCart:CarProp[] = []

  ngOnInit(): void {
    this.getCarDetail()
    this.getCarProps()
    this.createCarPropForm()
    this.getCarCartItems()
    this.getPropsCartItems()
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
          this.cartService.addToCart(this.car)
        }
      })
    })
  }



  getCarProps() {
    this.cartService.getCarProps().subscribe(data => {
      this.carProps = data
    })
  }

  addProp(carProp: CarProperty){
    let isAdded = false
    for(let i = 0; i < this.selectedCarProps.length; i++){
      if(this.selectedCarProps[i].name == carProp.name){
        isAdded = true

      }
    }
    if(!isAdded){
      this.selectedCarProps.push(carProp)
      this.cartService.addToCart2(carProp)

      console.log(this.selectedCarProps)
    }
  }

  getCarCartItems() {
    this.cartItems = this.cartService.getCarCartItems()
  }
  getPropsCartItems() {
    this.carPropsCart = this.cartService.getPropsCartItems()
  }

}
