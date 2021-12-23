import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  },  {
    path: 'modal-bayen',
    loadChildren: () => import('./modal-bayen/modal-bayen.module').then( m => m.ModalBayenPageModule)
  },
  {
    path: 'modal-kaima',
    loadChildren: () => import('./modal-kaima/modal-kaima.module').then( m => m.ModalKaimaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}
