import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDetails() {
    this.carService.getDetail().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
