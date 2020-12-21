import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CostumersService} from '../../services/costumers.service';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.css']
})
export class CostumersComponent implements OnInit {
    customers;
  constructor(
    private customersService:CostumersService,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.customersService.getCustomers()
      .subscribe(data=>{
        this.customers= data
      });
  }

}
