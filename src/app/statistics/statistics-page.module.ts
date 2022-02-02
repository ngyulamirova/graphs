import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsComponent} from './statistics.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {StatisticsPageRoutingModule} from './statistics-page-routing.module';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {BarChartModule} from '../common/bar-chart/bar-chart.module';
import {LineChartModule} from '../common/line-chart/line-chart.module';
import {PieChartModule} from '../common/pie-chart/pie-chart.module';


@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    BarChartModule,
    LineChartModule,
    PieChartModule,
    FormsModule,
    StatisticsPageRoutingModule,
    NgxEchartsModule.forChild()
  ]
})
export class StatisticsModule {
}
