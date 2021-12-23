import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBayenPage } from './modal-bayen.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBayenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBayenPageRoutingModule {}
