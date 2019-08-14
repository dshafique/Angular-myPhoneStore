import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

 addToCart(phone) {
    this.items.push(phone);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}