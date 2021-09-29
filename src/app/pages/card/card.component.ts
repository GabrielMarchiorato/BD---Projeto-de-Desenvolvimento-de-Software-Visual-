import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  cardOptions: any[];
  value1: string = "off";
  value2: string = "off";

  constructor(private primeNGConfig: PrimeNGConfig) {


    this.cardOptions = [
      { name: "Crédito", value: 1 },
      { name: "Débito", value: 2 }
    ];

  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

}

