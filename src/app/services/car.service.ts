import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44333/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
  }
  getDetail():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl)
  }
}