import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { ListaRegionesComponent } from "../lista-regiones/lista-regiones.component"
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  regionSeleccionada: any;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storageService: StorageService) { 
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

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

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
    this.storageService.setData('user',usuario);
    window.location.href='/home';
  }

}
