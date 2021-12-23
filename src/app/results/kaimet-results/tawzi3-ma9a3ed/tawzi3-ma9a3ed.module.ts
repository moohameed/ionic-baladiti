import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tawzi3Ma9a3edPageRoutingModule } from './tawzi3-ma9a3ed-routing.module';

import { Tawzi3Ma9a3edPage } from './tawzi3-ma9a3ed.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tawzi3Ma9a3edPageRoutingModule,
    ChartsModule
  ],
  declarations: [Tawzi3Ma9a3edPage]
})
export class Tawzi3Ma9a3edPageModule {}
