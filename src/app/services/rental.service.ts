import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl="https://localhost:44333/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }
  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    return this.httpClient.get<ListResponseModel<RentalDetail>>(this.apiUrl)
  }
}
