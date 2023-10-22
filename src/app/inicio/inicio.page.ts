import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  userAlum: string | null;

  constructor(public storageService: StorageService) {
    let value = JSON.parse(localStorage.getItem("usuario")!);
    //const nam = this.storageService.showName("usuario");
    this.userAlum = value.nombre;
   }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('ingresado');
  }

}
