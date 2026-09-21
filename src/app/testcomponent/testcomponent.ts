import { Component } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  imports: [],
  templateUrl: './testcomponent.html',
  styleUrl: './testcomponent.css',
})
export class Testcomponent {
  protected title="Apparemment ici faut double calibresis pour une props, et faut la protected"
  protected isDisabled = false
  protected onClick() {
    this.isDisabled = !this.isDisabled
  }
}
