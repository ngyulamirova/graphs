import {NgxEchartsModule} from 'ngx-echarts';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarChartComponent} from './bar-chart.component';

@NgModule({
  declarations: [
    BarChartComponent
  ],
  exports: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forChild()
  ]
})
export class BarChartModule { }
