import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  standalone: true,
  imports: [],
  templateUrl: './esercizio1.component.html',
  styleUrl: './esercizio1.component.css'
})
export class Esercizio1Component {
  nome: string = 'Miriam'
  cognome: string = 'Benbachir'
  eta: number = 33
  hobby: string = 'Sport'
  
  ngOnInit(){
    console.log('sono stato avviato')
  }
  



}
