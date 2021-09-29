import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import {CardModule} from 'primeng/card';


import { HomeComponent } from './home.component';
import { BalanceComponent } from 'src/app/components/balance/balance.component';
import { ChartModule } from 'primeng/chart';
import { TypesChartComponent } from 'src/app/components/types-chart/types-chart.component';

import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown'; 
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CardModule,
    ChartModule,
    DataViewModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule
  ],
  declarations: [HomeComponent, BalanceComponent, TypesChartComponent]
})
export class HomeModule {}
