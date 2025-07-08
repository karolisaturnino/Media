import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})
export class CalculaMedia {
 mediaparcial: number | undefined

// constructor() {
 //  this.mediaparcial = undefined;
 // }
 boletim:Boletim
 constructor() {
   this.boletim = new Boletim();
   this.mediaparcial = undefined;
 }

 alterarNotas(b1:number, b2:number, b3:number, b4:number) {
   this.boletim.bim1 = b1;
   this.boletim.bim2 = b2;
   this.boletim.bim3 = b3;
   this.boletim.bim4 = b4;
   this.calcularMediaParcial(b1, b2, b3, b4);
 }


situacao: string = 'Indefinida';
 /*calularMediaParcial( b1:number, b2:number, b3:number, b4:number){
  this.mediaparcial = (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
 }
calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
  this.mediaparcial = this.boletim.calcularMediaParcial(b1, b2, b3, b4);
  this.alterarsituacao(this.mediaparcial);
}


alterarsituacao(mp: number | undefined) {
  if (mp === undefined) {
    this.situacao = 'Indefinida';
  } else if (mp >= 60) {
    this.situacao = 'Aprovado';
  } else if (mp >= 10) {
    this.situacao = 'Avaliação Final';
  } else {
    this.situacao = 'Reprovado';
  }
}
}
