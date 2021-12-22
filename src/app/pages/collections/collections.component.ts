import { Component, OnInit } from '@angular/core';
import { ImageProduct, mockImages } from 'src/app/mock-image';
import { Item } from 'src/app/item';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProd } from 'src/app/cart.action';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  images: Array<ImageProduct> = mockImages;
  imageSelected: ImageProduct = this.images[0];
  counter: number = 0;
  discount: number = 50;
  lastPrice: number = 250;
  currentPrice: number = (this.lastPrice * this.discount) / 100;
  name:string = 'Fall Limited Edition Sneakers';
  listProdInCart$: Observable<Array<Item>>;

  constructor(private store: Store<{ cart: Array<Item> }>) {
    this.listProdInCart$ = store.select('cart');
  }

  ngOnInit(): void {}

  onSelectImage(img:ImageProduct) {
    this.imageSelected = img
  }

  addToCart(prod:Item) {
    if(!prod.quantity) return;
    const cartProd:Item = {
      ...prod,
      img: this.imageSelected.thumbnail
    }
    this.store.dispatch(addProd({ prod:cartProd }));
  }
}
