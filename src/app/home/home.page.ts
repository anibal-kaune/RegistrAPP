import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  arrayPosts:any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private storage: Storage)
    {
      this.formularioLogin = this.fb.group({
        'correo': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
      })
    }

    async ingresar(){
      var f = this.formularioLogin.value;
  
      var usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');
  
      if(usuario.correo == f.correo && usuario.password == f.password){
        console.log('ingresado');
        localStorage.setItem('ingresado','true'); //bandera que indica sesion activa
        this.navCtrl.navigateRoot('inicio');
      }else{
        const alert = await this.alertController.create({
          header: '¡Ha ocurrido un error!',
          message: 'Los datos ingresados son incorrectos.',
          buttons: ['Aceptar']
        });
  
        await alert.present();
  
      }
    }


  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };

}
