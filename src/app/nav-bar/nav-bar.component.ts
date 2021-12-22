import {
  Component,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './../item';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  listNavBar: Array<string> = [
    'collections',
    'men',
    'women',
    'about',
    'contact',
  ];

  numberProdInCart:number = 0;

  isShowCart: boolean = false;

  listProdInCart$: Observable<Item[]>;
  toggleCart() {
    this.isShowCart = !this.isShowCart;
  }

  constructor(private store: Store<{ cart: Array<Item> }>) {
    this.listProdInCart$ = store.select('cart');
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.listProdInCart$.subscribe(p => this.numberProdInCart = p.length)
  }

  totalPrice(price:number, quantity:number|undefined):number{
    if(!quantity) return 0;
    return (price*quantity)
  }
}
