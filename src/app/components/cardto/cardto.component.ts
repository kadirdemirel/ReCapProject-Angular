import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/cardto';
import { CardtoService } from 'src/app/services/cardto.service';


@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {
  cardtos:CarDto[]=[];
  dataLoaded=false;
  constructor(private cardtoService:CardtoService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails()
  {
    this.cardtoService.getCarDetails().subscribe((response)=>{
      this.cardtos=response.data;
      this.dataLoaded=true;
    })
  }

}
