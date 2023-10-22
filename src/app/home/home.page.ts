import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storageService: StorageService) {
      this.formularioLogin = this.fb.group({
        'correo': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
      })
    }

    async ingresar(){
      var f = this.formularioLogin.value;
  
      var usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');

      await this.storageService.read("usuario").then(async (data:any)=>{
        let usu = JSON.parse(data.value);

        if(usu.correo == f.correo && usu.password == f.password){
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

      }})

        
      //const p = (this.storageService.read("usuario")|| '{}');
 
      //var usu = JSON.parse(p)
      //var usu = JSON.parse()
      //this.storageService.getData().then ((val) =>console.log(val));
      //var val = this.storageService.getData();
  
      /*if(usuario.correo == f.correo && usuario.password == f.password){
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
  
      }*/
    }

}
