import { Component, OnInit } from '@angular/core';
import { RentAl } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentAl[]=[];
  dataLoaded=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentAls();
  }
  getRentAls()
  {
    this.rentalService.getRentAls().subscribe((response)=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    });
  }

}
