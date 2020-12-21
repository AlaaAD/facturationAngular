import { Component, OnInit } from '@angular/core';
import {FacturationServiceService} from '../../services/facturation-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.css']
})
export class FacturationComponent implements OnInit {

  facture;

  constructor(
    private facturationServiceService:FacturationServiceService,
    private router:Router
  ) { }


  ngOnInit(): void {
    this.facturationServiceService.getFacturations()
      .subscribe(data=>{
        this.facture=data
        console.log(this.facture)
      });

  }

}
