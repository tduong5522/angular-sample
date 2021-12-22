import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  private handleError<T>(operation = 'operation', result?:T){
    return (error:any):Observable<T> => {
      console.log(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  addCart(item:Item):Observable<Item>{
    localStorage.setItem("cart", item.toString())
    return of(item).pipe(catchError(this.handleError<any>("addCart")))
  }
}
