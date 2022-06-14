import { Car } from './../../../models/car';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carService: CarService) { }
  cars: Car[];
  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.carService.getCar().subscribe(data => {
      this.cars = data;
    })
  }

}
