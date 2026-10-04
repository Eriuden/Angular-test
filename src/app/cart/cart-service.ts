import { Product } from './../products/product';
import { signal } from '@angular/core';
import { Injectable } from '@angular/core';

//les services servent basiquement de simili-API
//Mais mieux vaut voir pour ça ngrxsignal

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<Product[]>([])

  addToCart(product: Product) {
    this.cartItems.update((items) =>[...items, product])
  }
}

