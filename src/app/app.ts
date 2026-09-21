import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Testcomponent } from './testcomponent/testcomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Testcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test');
}
