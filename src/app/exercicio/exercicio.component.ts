import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent {
  frase: string = 'olá, mundo';
  linkDaAncora: string = 'https://www.example.com';
  corBackground: string = 'white';
  corFonte: string = 'black';
  opcaoSelecionada: string = '';
  texto1Visivel: boolean = false;
  texto2Visivel: boolean = false;
  texto3Visivel: boolean = false;
  texto4Visivel: boolean = false;

  mudarCor() {
    if (this.corBackground === 'white') {
      this.corBackground = 'blue';
      this.corFonte = 'red';
    } else {
      this.corBackground = 'white';
      this.corFonte = 'black';
    }
  }
}
