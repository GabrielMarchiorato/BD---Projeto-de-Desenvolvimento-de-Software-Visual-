import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';

import { CardComponent } from './card.component';
import { CardsCarouselComponent } from 'src/app/shared/cards-carousel/cards-carousel.component';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
    CarouselModule
  ],
  declarations: [
    CardComponent,
    CardsCarouselComponent
  ]
})
export class CardModule {}
