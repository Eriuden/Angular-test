import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIcon, MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, MatIcon, MatIconModule, FormsModule, MatFormFieldModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {

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

  protected clearSearch() {
    this.searchTerm.set("")
  }

  protected trimSearch() {
    this.searchTerm.update((value) => value.trim())
  }
}
