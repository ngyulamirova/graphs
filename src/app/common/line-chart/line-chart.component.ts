import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LineTimeChartOptions} from '../../settings';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {
  @Input() title: string = '';
  @Input() type: string = 'time';
  @Input() data: any = null;

  chartOptions: any = LineTimeChartOptions;
  chartInstance: any;


  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && this.chartInstance){
      this.chartInstance.setOption(changes.data.currentValue);
    }
  }
}
