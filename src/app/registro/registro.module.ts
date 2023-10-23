import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { ListaRegionesComponent } from '../lista-regiones/lista-regiones.component';
import { ListaComunaComponent } from '../lista-comuna/lista-comuna.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroPage, ListaRegionesComponent, ListaComunaComponent]
})
export class RegistroPageModule {}
