import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaimaPageRoutingModule } from './kaima-routing.module';

import { KaimaPage } from './kaima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaimaPageRoutingModule
  ],
  declarations: [KaimaPage]
})
export class KaimaPageModule {}
