import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentAlResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44364/api/rentals/getall"
  constructor(private httpClient:HttpClient) { }
  getRentAls():Observable<RentAlResponseModel>
  {
    return this.httpClient.get<RentAlResponseModel>(this.apiUrl);
  }
}
