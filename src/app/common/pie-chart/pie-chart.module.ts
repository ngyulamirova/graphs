import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieChartComponent} from './pie-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [
    PieChartComponent
  ],
  exports: [
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forChild()
  ]
})
export class PieChartModule {
}
