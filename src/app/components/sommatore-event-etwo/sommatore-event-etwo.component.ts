import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sommatore-event-etwo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sommatore-event-etwo.component.html',
  styleUrl: './sommatore-event-etwo.component.css'
})
export class SommatoreEventEtwoComponent {
  somma : number = 0;
  num1 : number = 0;
  num2 : number = 0;

  Somma(){
    this.somma = this.num1 + this.num2 ;
  }

}
