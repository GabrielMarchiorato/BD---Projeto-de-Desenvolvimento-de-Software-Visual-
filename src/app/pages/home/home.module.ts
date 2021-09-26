import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import {CardModule} from 'primeng/card';

import { HomeComponent } from './home.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CardModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
