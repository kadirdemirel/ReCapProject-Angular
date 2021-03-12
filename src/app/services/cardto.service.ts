import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDtoResponseModel } from '../models/cardtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  apiUrl="https://localhost:44364/api/cars/getall"
  constructor(private httpClient:HttpClient) { }
  getCarDetails():Observable<CarDtoResponseModel>
  {
    return this.httpClient.get<CarDtoResponseModel>(this.apiUrl);
  }

}
