import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaimaPage } from './kaima.page';
import { DiveIntoKaimatPage } from '../dive-into-kaimat/dive-into-kaimat.page';

const routes: Routes = [
  {
    path: '',
    component: KaimaPage
  },
  {
    path: 'dive-into-kaimat',
    component: DiveIntoKaimatPage
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaimaPageRoutingModule {}
