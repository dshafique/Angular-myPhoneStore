import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Phones } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  phone;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.phone = Phones[+params.get('productId')];
  });
  }

}