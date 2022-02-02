import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBarComponent } from './basic-bar.component';
import {NgxEchartsModule} from "ngx-echarts";



@NgModule({
  declarations: [
    BasicBarComponent
  ],
  exports: [
    BasicBarComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class BasicBarModule { }
