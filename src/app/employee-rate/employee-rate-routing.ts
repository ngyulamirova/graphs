import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeRateComponent} from './employee-rate.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeRateComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeRateRoutingModule { }
