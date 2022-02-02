import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PieChartOptions} from '../../settings';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() data: any = null;
  chartOptions: any = PieChartOptions;
  chartInstance: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && this.chartInstance){
      this.chartInstance.setOption(changes.data.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
