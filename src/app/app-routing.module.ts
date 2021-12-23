import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'kaima',
    loadChildren: () => import('./kaima/kaima.module').then( m => m.KaimaPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule),
  },
  {
    path: 'dive-into-kaimat',
    loadChildren: () => import('./dive-into-kaimat/dive-into-kaimat.module').then( m => m.DiveIntoKaimatPageModule)
  },
  //Test
  {
    path: 'attafasil',
    loadChildren: () => import('./results/kaimet-results/attafasil/attafasil.module').then( m => m.AttafasilPageModule)
  },
  {
    path: 'tafasxi',
    loadChildren: () => import('./results/kaimet-results/tafasil-alkaima/tafasxi.module').then( m => m.TafasxiPageModule)
  },
  {
    path: 'tawzi3-ma9a3ed',
    loadChildren: () => import('./results/kaimet-results/tawzi3-ma9a3ed/tawzi3-ma9a3ed.module').then( m => m.Tawzi3Ma9a3edPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
