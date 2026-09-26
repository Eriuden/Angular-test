import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: "untel",
      description:"untel",
      price : 12,
      originalPrice: 12
    },
    {
      id: 2,
      name: "untel",
      description:"untel",
      price : 12,
      originalPrice: 12
    },
    {
      id: 3,
      name: "untel",
      description:"untel",
      price : 12,
      originalPrice: 12
    },
  ])
}
