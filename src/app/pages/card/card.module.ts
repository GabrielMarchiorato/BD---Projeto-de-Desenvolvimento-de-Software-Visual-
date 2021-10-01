import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { Component } from "@angular/core";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import {SelectButtonModule} from 'primeng/selectbutton';
import { CardModule as CardM } from 'primeng/card';


import { CardComponent } from './card.component';
import { CardsCarouselComponent } from 'src/app/shared/cards-carousel/cards-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
    CarouselModule,
    InputTextModule,
    SelectButtonModule,
    SweetAlert2Module,
    InputNumberModule,
    CardM,

    DataViewModule,
    ButtonModule,
  ],
  declarations: [
    CardComponent,
    CardsCarouselComponent
  ]
})
export class CardModule {}


