import { Component, OnInit } from '@angular/core';
import { DatosComunalesService } from '../services/datos-comunales.service';

@Component({
  selector: 'app-lista-comuna',
  templateUrl: './lista-comuna.component.html',
  styleUrls: ['./lista-comuna.component.scss'],
})
export class ListaComunaComponent  implements OnInit {
    comunas:any[]=[]

  constructor(private datosComunalesService: DatosComunalesService) { }

  ngOnInit() {    
    this.obtenerComuna();
  }
  obtenerComuna(){
    this.datosComunalesService.obtenerComunas().subscribe(
      (data)=>{
        this.comunas = data.data;
      },
      (error)=>{
        console.error('Error no se pueden obtener las regiones: ', error);
      }
    );
  }
  seleccionarComuna(comuna: any) {
    // Aquí puedes manejar la selección de la comuna
    // event contiene información sobre el cambio seleccionado
    console.log('Región seleccionada:', comuna.id);
  }
}
