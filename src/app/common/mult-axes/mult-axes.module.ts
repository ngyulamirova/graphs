import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultAxesComponent} from './mult-axes.component';
import {NgxEchartsModule} from "ngx-echarts";


@NgModule({
  declarations: [
    MultAxesComponent
  ],
  exports: [
    MultAxesComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forChild()
  ]
})
export class MultAxesModule {
}
