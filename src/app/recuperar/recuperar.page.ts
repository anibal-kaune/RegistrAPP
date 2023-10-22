import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecuperar: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storageService: StorageService) {
      this.formularioRecuperar = this.fb.group({
        'rut': new FormControl("",Validators.required),
        'correo': new FormControl("",Validators.required),
      })
     }

  ngOnInit() {
  }

  async recuperar(){
    var f = this.formularioRecuperar.value;

    //var usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');

    await this.storageService.read("usuario").then(async (data:any)=>{
      let usu = JSON.parse(data.value);

      if(usu.rut == f.rut && usu.correo == f.correo){
        console.log('ingresado');
        this.navCtrl.navigateRoot('change-pass');
      }else{
        const alert = await this.alertController.create({
          header: '¡Ha ocurrido un error!',
          message: 'Los datos ingresados son incorrectos.',
          buttons: ['Aceptar']
        });
  
        await alert.present();

    }})

    /*if(usuario.rut == f.rut && usuario.correo == f.correo){
      console.log('ingresado');
      localStorage.setItem('ingresado','true'); //bandera que indica sesion activa
      this.navCtrl.navigateRoot('change-pass');
    }else{
      const alert = await this.alertController.create({
        header: '¡Ha ocurrido un error!',
        message: 'Los datos ingresados son incorrectos.',
        buttons: ['Aceptar']
      });

      await alert.present();

    }*/
  }

}
