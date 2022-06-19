import { CarProps } from '../models/carProps';
import { CartItems } from './../models/cartItems';
import { CartItem } from 'src/app/models/cartItem';
import { HttpClient } from '@angular/common/http';
import { CarProperty } from './../models/carProperty';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CarProp } from '../models/carProp';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) { }
  getCarProps():Observable<CarProperty[]>{
    return this.httpClient.get<CarProperty[]>("http://localhost:3000/carProperties")
  }

  addToCart(car: Car){
    let cartItem: CartItem = new CartItem()
    cartItem.car = car
    CartItems.push(cartItem)

  }

  addToCart2(prop: CarProperty){
    let carProps: CarProp = new CarProp()
    carProps.carProps = prop
    CarProps.push(carProps)

  }



  getCarCartItems() {
    return CartItems
  }
  getPropsCartItems() {
    return CarProps
  }


}
