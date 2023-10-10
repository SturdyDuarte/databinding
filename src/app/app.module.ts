import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Adicione esta linha

import { AppComponent } from './app.component';
import { ExercicioComponent } from './exercicio/exercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
