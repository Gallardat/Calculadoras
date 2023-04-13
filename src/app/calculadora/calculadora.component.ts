import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  n1:number=0;
  n2:number=0;
  resultado:number=0;

  constructor(){}
  ngOnInit(): void {

  }

  suma(){
  this.resultado=this.n1+this.n2;
  alert("El resultado es: "+this.resultado)
  }
  resta(){
    this.resultado=this.n1-this.n2;
    alert("El resultado es: "+this.resultado)

  }
  multiplicacion(){
    this.resultado=this.n1*this.n2;
    alert("El resultado es: "+this.resultado)

  }
  division(){
    this.resultado=this.n1/this.n2;
    alert("El resultado es: "+this.resultado)

  }
}
