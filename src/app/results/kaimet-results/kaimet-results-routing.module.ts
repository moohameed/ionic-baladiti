import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaimetResultsPage } from './kaimet-results.page';


const routes: Routes = [
  {
    path: '',
    component: KaimetResultsPage
  },
  {
    path: 'attafasil',
    loadChildren: () => import('./attafasil/attafasil.module').then( m => m.AttafasilPageModule)
  },
  {
    path: 'tafasxi',
    loadChildren: () => import('./tafasil-alkaima/tafasxi.module').then( m => m.TafasxiPageModule)
  },
  {
    path: 'tawzi3-ma9a3ed',
    loadChildren: () => import('./tawzi3-ma9a3ed/tawzi3-ma9a3ed.module').then( m => m.Tawzi3Ma9a3edPageModule)
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaimetResultsPageRoutingModule {}
