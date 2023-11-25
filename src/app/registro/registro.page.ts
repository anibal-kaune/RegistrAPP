import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
interface Region {
  id: number;
  nombre: string;
}

interface Comuna {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  regiones: Region[] = [];
  comunas: Comuna[] = [];

  formularioRegistro: FormGroup;
  regionSeleccionada: any;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storageService: StorageService,
    private http: HttpClient,
    private storage: Storage) { 
      this.formularioRegistro = this.fb.group({
        'nombre': new FormControl("", Validators.required),
        'apellido': new FormControl("", Validators.required),
        'rut': new FormControl("", Validators.required),
        'correo': new FormControl("", Validators.required),
        'region': new FormControl("", Validators.required),
        'comuna': new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required),
        'confirmacionPassword': new FormControl("", Validators.required)
        }); 
    }

    async ngOnInit() {
      this.loadRegiones();
      await this.storage.create();
    
      // Verificar si ya hay datos almacenados y, si es así, cargarlos
      const existingData = await this.storage.get('datos');
    
      if (existingData) {
        // Si hay datos almacenados previamente, podrías procesarlos o mostrarlos
        console.log('Datos existentes:', existingData);
      }
    }

    async guardar(){
      var f = this.formularioRegistro.value;
    
      // Obtener datos existentes
      const existingData = await this.storage.get('datos') || [];
    
      // // Agregar los nuevos datos al arreglo
      existingData.push({
        nombre: f.nombre,
        apellido: f.apellido,
        rut: f.rut,
        correo: f.correo,
        region: f.region,
        comuna: f.comuna,
        password: f.password
      });
    
      // // Almacenar el arreglo actualizado
       await this.storage.set('datos', existingData);
  
      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Campos incompletos',
          message: 'Debes llenar todos los campos.',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }
      var usuario = {
        nombre: f.nombre,
        apellido: f.apellido,
        rut: f.rut,
        correo: f.correo,
        region: f.region,
        comuna: f.comuna,
        password: f.password
      }
      localStorage.setItem('usuario',JSON.stringify(usuario));
      localStorage.setItem("nombreUsuariJ",usuario.nombre)
      window.location.href='/home';
    }

    loadRegiones() {
      this.http.get<any>('https://dev.matiivilla.cl/duoc/location/region').subscribe({
        next: (data) => {
          this.regiones = data.data.map((region: any) => ({
            id: region.id,
            nombre: region.nombre,
          }));
        },
        error: (error) => {
          console.error('Error al obtener las regiones:', error);
        },
      });
    }
  
    onRegionChange() {
      const regionId = Number(this.formularioRegistro.value.region);
      if (!isNaN(regionId)) {
        this.http.get<any>(`https://dev.matiivilla.cl/duoc/location/comuna/${regionId}`).subscribe({
          next: (data) => {
            this.comunas = data.data.map((comuna: any) => ({
              id: comuna.id,
              nombre: comuna.nombre,
            }));
          },
          error: (error) => {
            console.error('Error al obtener las comunas por región:', error);
          },
        });
      } else {
        console.error('Error: No se pudo convertir la región a un número.');
      }
    }

}