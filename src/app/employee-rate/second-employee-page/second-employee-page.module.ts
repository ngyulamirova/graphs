import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecondEmployeePageComponent} from './second-employee-page.component';
import {BarStackModule} from "../../common/bar-stack/bar-stack.module";
import {SecondPageFiltersComponent} from './second-page-filters/second-page-filters.component';
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";
import {MultAxesModule} from "../../common/mult-axes/mult-axes.module";


@NgModule({
  declarations: [
    SecondEmployeePageComponent,
    SecondPageFiltersComponent
  ],
  exports: [
    SecondEmployeePageComponent
  ],
  imports: [
    CommonModule,
    BarStackModule,
    DropdownModule,
    ReactiveFormsModule,
    MultAxesModule
  ]
})
export class SecondEmployeePageModule {
}
