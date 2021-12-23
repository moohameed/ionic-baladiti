import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiveIntoKaimatPageRoutingModule } from './dive-into-kaimat-routing.module';

import { DiveIntoKaimatPage } from './dive-into-kaimat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiveIntoKaimatPageRoutingModule
  ],
  declarations: [DiveIntoKaimatPage]
})
export class DiveIntoKaimatPageModule {}
