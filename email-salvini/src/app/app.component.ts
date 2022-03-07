import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
  }
  Email : string = "";
  estratto : string = "";
  Testo : string = "";
  vett_Email_Oggetto : string[] = [];
  registrazione(Email : HTMLInputElement, Testo : HTMLInputElement,  Oggetto : HTMLInputElement ){
    console.log(Email.value, Oggetto.value, Testo.value)
    this.estratto = (Email.value) + " " + (Oggetto.value)
  }
}
