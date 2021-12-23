import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tawzi3Ma9a3edPage } from './tawzi3-ma9a3ed.page';

const routes: Routes = [
  {
    path: '',
    component: Tawzi3Ma9a3edPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tawzi3Ma9a3edPageRoutingModule {}
