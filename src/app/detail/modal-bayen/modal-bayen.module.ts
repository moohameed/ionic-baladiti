import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBayenPageRoutingModule } from './modal-bayen-routing.module';

import { ModalBayenPage } from './modal-bayen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBayenPageRoutingModule
  ],
  declarations: [ModalBayenPage]
})
export class ModalBayenPageModule {}
