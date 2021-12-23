import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalKaimaPage } from './modal-kaima.page';

const routes: Routes = [
  {
    path: '',
    component: ModalKaimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalKaimaPageRoutingModule {}
