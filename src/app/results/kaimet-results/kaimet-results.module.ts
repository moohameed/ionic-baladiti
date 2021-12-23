import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaimetResultsPageRoutingModule } from './kaimet-results-routing.module';

import { KaimetResultsPage } from './kaimet-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaimetResultsPageRoutingModule
  ],
  declarations: [KaimetResultsPage]
})
export class KaimetResultsPageModule {}
