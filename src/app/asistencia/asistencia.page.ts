import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  dataProfe:string | null;
  userAlum: string | null;

  constructor(public storageService: StorageService,
              public alertController: AlertController) {
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

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    const latitud: number | any= coordinates.coords.latitude;
    const longitud= coordinates.coords.longitude;

    const alert = await this.alertController.create({
      header: 'Localización actual',
      message: 'Latitud: ' + latitud + ' ' + 'Longitud: ' + longitud,
      buttons: ['Aceptar']
    });

    await alert.present();

  };

}
