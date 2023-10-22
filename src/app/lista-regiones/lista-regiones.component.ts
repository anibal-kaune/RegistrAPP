import { Component, OnInit } from '@angular/core';
import { DatosRegionalesService } from 'src/app/services/datos-regionales.service';



@Component({
  selector: 'app-lista-regiones',
  templateUrl: './lista-regiones.component.html',
  styleUrls: ['./lista-regiones.component.scss'],
})
export class ListaRegionesComponent  implements OnInit {
  regiones:any[]=[]

  constructor( private datosRegionalesService: DatosRegionalesService) { }


  ngOnInit() {
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.datosRegionalesService.obtenerRegiones().subscribe(
      (data)=>{
        this.regiones = data.data;
      },
      (error)=>{
        console.error('Error no se pueden obtener las regiones: ', error);

      }
    );
  }
  seleccionarRegion(region: any) {
    // Puedes hacer lo que necesites con la región seleccionada, como enviarla a otra página o realizar otras acciones.
    console.log('Región seleccionada:', region.nombre);
  }

}
