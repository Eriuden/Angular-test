import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Testcomponent } from './testcomponent/testcomponent';
import { Header } from './header/header';
import { ProductGrid } from './products/product-grid/product-grid';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Testcomponent, Header, ProductGrid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');
}
