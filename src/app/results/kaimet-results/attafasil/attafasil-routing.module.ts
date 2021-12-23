import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttafasilPage } from './attafasil.page';

const routes: Routes = [
  {
    path: '',
    component: AttafasilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttafasilPageRoutingModule {}
