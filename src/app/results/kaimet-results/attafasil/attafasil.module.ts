import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttafasilPageRoutingModule } from './attafasil-routing.module';

import { AttafasilPage } from './attafasil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttafasilPageRoutingModule
  ],
  declarations: [AttafasilPage]
})
export class AttafasilPageModule {}
