import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Storage, StorageConfig } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario:string | undefined;
  userAlum: any;

  constructor(public storage: Storage){
  }

   async ngOnInit() {
    let value = JSON.parse(localStorage.getItem("usuario")!);
    this.userAlum = value.nombre;

}

  logOut(){
    localStorage.removeItem('ingresado');
  }

}
