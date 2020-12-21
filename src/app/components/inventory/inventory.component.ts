import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    products;
  constructor(
    private inventoryService:InventoryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.inventoryService.getProducts()
      .subscribe(data=>{
        this.products= data
      });
  }

}
