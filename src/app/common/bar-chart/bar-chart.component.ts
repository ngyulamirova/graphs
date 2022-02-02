import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HorizontalBarChartOptions, VerticalBarChartOptions} from '../../settings';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {
  _height = '400px';
  @Input() type: 'horizontal' | 'vertical' = 'vertical';
  @Input() title: string = '';
  @Input() data: any = null;
  @Input() scrollable: boolean = false;
  @Input() set height(data: number) {
    data && (this._height = data + 'px');
  }

  options = {
    vertical: VerticalBarChartOptions,
    horizontal: HorizontalBarChartOptions
  };
  chartOptions: any;
  chartInstance: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && this.chartInstance) {
      this.chartInstance.setOption(changes.data.currentValue);
    }
  }

  ngOnInit(): void {

    this.chartOptions = {...this.options[this.type]};
    if (!this.scrollable) {
      this.chartOptions.dataZoom = false;
    }
  }
}
