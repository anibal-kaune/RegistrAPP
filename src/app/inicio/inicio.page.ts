import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  userAlum: string | null;

  constructor() {
    let value = JSON.parse(localStorage.getItem("usuario")!);
    this.userAlum = value.nombre;
   }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('ingresado');
  }

}
