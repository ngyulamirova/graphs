import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatMapComponent } from './heat-map.component';
import {NgxEchartsModule} from "ngx-echarts";



@NgModule({
    declarations: [
        HeatMapComponent
    ],
    exports: [
        HeatMapComponent
    ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class HeatMapModule { }
