import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafasxiPage } from './tafasxi.page';

const routes: Routes = [
  {
    path: '',
    component: TafasxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafasxiPageRoutingModule {}
