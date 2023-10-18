import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
      this.formularioLogin = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required),
      })
    }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario')|| '{}');

    if(usuario.nombre == f.nombre && usuario.password == f.password){
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

}
