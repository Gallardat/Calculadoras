import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  email:string=""
  direccion:string="";
  telefono:string=""
  comunidad:string=""
  formaPago: string="efectivo"
  aceptar:boolean=false
  mensajeFinal: string=""
  constructor(

  ){}
  ngOnInit(): void {

  }
  enviar(){
    this.mensajeFinal="Correo: "+this.email+" \n direccion: "+this.direccion+"  \ntelefono: "+this.telefono+" Comunidad: "+this.comunidad+" Forma de pago: "+this.formaPago
  }


}
