import { Component, OnInit } from '@angular/core';
import {Product} from '../../Model/Product'
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public items: Product[] = [];
  
  constructor(private productService : ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => res = this.items);
  }

}
