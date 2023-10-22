import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';


import { IonicModule } from '@ionic/angular';

import { CamConPageRoutingModule } from './cam-con-routing.module';

import { CamConPage } from './cam-con.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamConPageRoutingModule,
    ReactiveFormsModule,
    NgxScannerQrcodeModule,
  ],
  declarations: [CamConPage]
})
export class CamConPageModule {}
