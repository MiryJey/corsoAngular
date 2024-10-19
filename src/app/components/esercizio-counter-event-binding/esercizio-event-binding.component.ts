import { Component } from '@angular/core';


@Component({
  selector: 'app-esercizio-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './esercizio-event-binding.component.html',
  styleUrl: './esercizio-event-binding.component.css'
})
export class EsercizioEventBindingComponent {
  counter = 0;

  Incrementa(){
    this.counter ++;
  }


  Decrementa(){
    this.counter --;
  }
}
