import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Testcomponent } from './testcomponent/testcomponent';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Testcomponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');
}
