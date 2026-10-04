import { Product } from './../products/product';
import { computed, signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

//les services servent basiquement de simili-API
//Mais mieux vaut voir pour ça ngrxsignal

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([])

  readonly totalItems = computed(() => this.cartItems().reduce
    ((total, item) =>
    total + item.quantity, 0))
  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id)
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id ? {...item, quanttity : item.quantity + 1}
          : item
        )
      }

      return [...items, {product, quantity: 1}]
    })
  }
}

