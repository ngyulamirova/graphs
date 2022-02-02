import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarStackComponent } from './bar-stack.component';
import {NgxEchartsModule} from "ngx-echarts";



@NgModule({
  declarations: [
    BarStackComponent
  ],
  exports: [
    BarStackComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class BarStackModule { }
