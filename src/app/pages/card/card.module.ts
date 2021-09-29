import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { Component } from "@angular/core";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import {SelectButtonModule} from 'primeng/selectbutton';


import { CardComponent } from './card.component';
import { CardsCarouselComponent } from 'src/app/shared/cards-carousel/cards-carousel.component';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
    CarouselModule,
    InputTextModule,
    SelectButtonModule
  ],
  declarations: [
    CardComponent,
    CardsCarouselComponent
  ]
})
export class CardModule {}


