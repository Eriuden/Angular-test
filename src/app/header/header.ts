import { CartService } from './../cart/cart-service';
import { Component, inject } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly CartService = inject(CartService)
}
