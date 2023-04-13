import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent{

  n1:number=0;
  div:String="Euro";
  resultado:number=0;
  constructor(){}
  ngOnInit(): void {

  }

  calcular(){
    switch(this.div)
    {
      case "dolar":
        this.resultado=this.n1*1;
        break;
      case "euro":
        this.resultado=this.n1*2;
        break;
      case "pesos":
        this.resultado=this.n1*3;
        break;
    }

  }
}
