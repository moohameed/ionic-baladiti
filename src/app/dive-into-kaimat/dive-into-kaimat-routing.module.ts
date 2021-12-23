import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPage } from '../detail/detail.page';

import { DiveIntoKaimatPage } from './dive-into-kaimat.page';

const routes: Routes = [
  {
    path: '',
    component: DiveIntoKaimatPage
  },
  {
    path : 'detail',
    component : DetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiveIntoKaimatPageRoutingModule {}
