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
  mensaje:string =""
  constructor(

  ){}
  ngOnInit(): void {

  }
  enviar(){
   if(this.aceptar!= true)
   {
    this.mensaje="Ha aceptado recibir informacion"
   }
    else
  {
    this.mensaje="No ha aceptado recibir informacion"

  }
    this.mensajeFinal="Correo: "+this.email+"direccion: "+this.direccion+" \n telefono: "+this.telefono+" Comunidad: "+this.comunidad+" Forma de pago: "+this.formaPago+" "+this.mensaje
  }


}
