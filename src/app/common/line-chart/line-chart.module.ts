import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LineChartComponent} from './line-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  declarations: [
    LineChartComponent
  ],
  exports: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forChild()
  ]
})
export class LineChartModule {}
