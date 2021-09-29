import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-types-chart',
  templateUrl: './types-chart.component.html',
  styleUrls: ['./types-chart.component.scss']
})
export class TypesChartComponent implements OnInit {

  @Input() labels = [] as any[]

  @Input() data = [] as any[]
  @Input() chartData = {} as ChartData;
  @Input() options: ChartOptions = {};

  ngOnInit(){
    this.chartData = {
      labels: this.labels,
      datasets: [
          {
              label: 'First Dataset',
              data: this.data,
              tension: .4,
              backgroundColor: ['blue', 'red', 'orange', 'green', 'yellow', 'purple', 'cyan'],
          }
      ],

  };

    console.log(this.labels)
    console.log(this.data)

    this.options = {};
  }
}
