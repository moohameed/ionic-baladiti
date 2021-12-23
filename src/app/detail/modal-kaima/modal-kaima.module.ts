import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalKaimaPageRoutingModule } from './modal-kaima-routing.module';

import { ModalKaimaPage } from './modal-kaima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalKaimaPageRoutingModule
  ],
  declarations: [ModalKaimaPage]
})
export class ModalKaimaPageModule {}
