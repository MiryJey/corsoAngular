import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTestoTwoComponent } from "./components/input-testo-two/input-testo-two.component";
import {FormsModule} from '@angular/forms';
import { SommatoreEventEtwoComponent } from "./components/sommatore-event-etwo/sommatore-event-etwo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTestoTwoComponent, SommatoreEventEtwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corsoAngular';
}
