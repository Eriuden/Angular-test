import { Product } from './../product';
import { Component, computed, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { MatIcon, MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { CartService } from '../../cart/cart-service';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, MatIcon, MatIconModule, FormsModule, MatFormFieldModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {

  private readonly cartService = inject(CartService)

  protected readonly searchTerm = signal("")
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: "untel",
      description:"untel",
      price : 12,
      originalPrice: 15
    },
    {
      id: 2,
      name: "untel",
      description:"untel",
      price : 12,

    },
    {
      id: 3,
      name: "untel",
      description:"untel",
      price : 12,
      originalPrice: 15
    },
  ])

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim()
    if(!term) return this.products()

      return this.products().filter((product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term)
    )
  })

  protected onAddToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  protected clearSearch() {
    this.searchTerm.set("")
  }

  protected trimSearch() {
    this.searchTerm.update((value) => value.trim())
  }
}
