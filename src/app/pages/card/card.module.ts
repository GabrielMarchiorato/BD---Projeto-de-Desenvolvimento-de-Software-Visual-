import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardRoutingModule } from './card-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { Component } from "@angular/core";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import {SelectButtonModule} from 'primeng/selectbutton';


import { CardComponent } from './card.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule,
    InputTextModule,
    SelectButtonModule
  ],
  declarations: [CardComponent]
})
export class CardModule {}


