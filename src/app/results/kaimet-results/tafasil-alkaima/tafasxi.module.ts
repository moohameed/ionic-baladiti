import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafasxiPageRoutingModule } from './tafasxi-routing.module';

import { TafasxiPage } from './tafasxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafasxiPageRoutingModule
  ],
  declarations: [TafasxiPage]
})
export class TafasxiPageModule {}
