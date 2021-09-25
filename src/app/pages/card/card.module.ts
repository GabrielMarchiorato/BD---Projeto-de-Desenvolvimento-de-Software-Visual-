import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';

import { CardComponent } from './card.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule
  ],
  declarations: [CardComponent]
})
export class CardModule {}
