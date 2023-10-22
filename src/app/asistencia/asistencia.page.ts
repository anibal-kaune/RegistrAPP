import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  dataProfe:string | null;
  userAlum: string | null;

  constructor(public storageService: StorageService) {
    this.dataProfe = localStorage.getItem("dataProfeCamera");
    
    let value = JSON.parse(localStorage.getItem("usuario")!);
    this.userAlum = value.nombre
    }
    
  mostrarInfo(){
    const datos = localStorage.getItem("dataProfeCamera")
    console.log(datos)
  }

  cerrarSesion(){
    localStorage.removeItem("dataProfeCamera")
  }
  ngOnInit() {
  }

}
