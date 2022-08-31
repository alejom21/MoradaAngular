import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'morada-app';
  estoesuntexto!:String;
  esValido = false;
  esValido2 : Boolean = true;
  userName = "Alejandro Mejia";
}
