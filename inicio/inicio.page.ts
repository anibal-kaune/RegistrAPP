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

    ngOnInit() {
    this.nombreUsuario = localStorage.getItem('nombreUsuariJ')!
}

  logOut(){
    localStorage.removeItem('ingresado');
  }

}
