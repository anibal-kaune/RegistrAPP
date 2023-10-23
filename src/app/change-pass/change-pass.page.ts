import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss'],
})
export class ChangePassPage implements OnInit {

  formularioContrasena: FormGroup;
  cambioPass: any;
  Usuariopassword: any;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storageService: StorageService,
    private storage: Storage) { 
      this.formularioContrasena = this.fb.group({
        'password': new FormControl("", Validators.required),
        'confirmacionPassword': new FormControl("", Validators.required)
        }); 
    }

  async ngOnInit() {

  }
  

  async cambiar(){
    var f = this.formularioContrasena.value;

    if(this.formularioContrasena.invalid){
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Debes llenar todos los campos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var contra = {
      password: f.password
      }

      await this.storageService.read("usuario").then(async (data:any)=>{
      let usu = JSON.parse(data.value);

      if(this.formularioContrasena.valid, usu){
  
        usu.password = contra.password;
        this.storageService.create("usuario",JSON.stringify(usu));
        }
    })
    
    /*
    const elemento = localStorage.getItem('usuario');

    if(this.formularioContrasena.valid, elemento){
  
    const con = JSON.parse(elemento);
    con.password = contra.password;
    localStorage.setItem('usuario',JSON.stringify(con));
    }
    */
    
    window.location.href='/home';
  }

}
