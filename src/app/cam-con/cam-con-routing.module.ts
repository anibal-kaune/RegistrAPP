import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamConPage } from './cam-con.page';

const routes: Routes = [
  {
    path: '',
    component: CamConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamConPageRoutingModule {}
