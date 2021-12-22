import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item';
import { addProd } from 'src/app/cart.action';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.css'],
})
export class InfoProductComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() discount: number = 0;
  @Input() lastPrice: number = 0;
  @Input() currentPrice: number = 0;
  @Input() nameProduct: string = '';

  @Output() addToCartEvent = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(): void {}

  minusNumber() {
    if (this.counter === 0) return;
    this.counter -= 1;
  }

  plusNumber() {
    this.counter += 1;
  }

  addToCart() {
    const mockProd: Item = {
      name: this.nameProduct,
      price: this.currentPrice,
      quantity: this.counter,
    };
    this.addToCartEvent.emit(mockProd);
  }
}
