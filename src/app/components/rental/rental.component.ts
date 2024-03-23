import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';
import { RentalDetail } from '../../models/rentalDetail';
import { response } from 'express';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css',
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  rentalDetails: RentalDetail[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
}
