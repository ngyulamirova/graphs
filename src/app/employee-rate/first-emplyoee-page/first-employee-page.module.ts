import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstEmployeePageComponent} from './first-employee-page.component';
import {BarStackModule} from "../../common/bar-stack/bar-stack.module";
import {BarChartModule} from "../../common/bar-chart/bar-chart.module";
import {HeatMapModule} from "../../common/heat-map/heat-map.module";
import {BasicBarModule} from "../../common/basic-bar/basic-bar.module";


@NgModule({
  declarations: [
    FirstEmployeePageComponent
  ],
  exports: [
    FirstEmployeePageComponent
  ],
  imports: [
    CommonModule,
    BarStackModule,
    BarChartModule,
    HeatMapModule,
    BasicBarModule
  ]
})
export class FirstEmployeePageModule {
}
