import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-input-testo-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-testo-two.component.html',
  styleUrl: './input-testo-two.component.css'
})


export class InputTestoTwoComponent {
  name: String = 'Miriam';

  onClick(){
    alert ('Ciao Miriam questo è un allert del bottone');
  }
}
