import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRateComponent } from './employee-rate.component';
import {EmployeeRateRoutingModule} from './employee-rate-routing';
import {PaginationModule} from "../common/pagination/pagination.module";
import {FirstEmployeePageModule} from "./first-emplyoee-page/first-employee-page.module";
import {SecondEmployeePageModule} from "./second-employee-page/second-employee-page.module";
import {FilterPageModule} from "./filter-page/filter-page.module";

@NgModule({
  declarations: [
    EmployeeRateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRateRoutingModule,
    PaginationModule,
    FirstEmployeePageModule,
    SecondEmployeePageModule,
    FilterPageModule
  ]
})
export class EmployeeRateModule { }
