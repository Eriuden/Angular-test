import { Component, computed, effect, signal } from '@angular/core';

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

  protected count = signal(0)

  protected doubleCount = computed( () =>
    {return this.count()*2}
  )

  private readonly countLog = effect( () => {
    console.log("compte a changé", this.count())
  })

   protected increase() {
    this.count.update (v => v + 1)
  }

  protected decrease() {
    this.count.update (v => v - 1)
  }

  protected reset() {
    this.count.set(0)
  }
}
