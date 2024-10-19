import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  message: string ='Hello world';
  name: string = 'Miriam';

}


prodotti =[
  {prodotto:'coca cola',prezzo: '2 euro'},
  {prodotto:'fanta',prezzo: '1 euro'},
  {prodotto:'carne',prezzo: '5 euro'},
  {prodotto:'acqua',prezzo: '2 euro'},
]