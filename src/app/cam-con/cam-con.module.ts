import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamConPageRoutingModule } from './cam-con-routing.module';

import { CamConPage } from './cam-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamConPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CamConPage]
})
export class CamConPageModule {}
