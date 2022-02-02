import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPageComponent } from './filter-page.component';
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from 'primeng/multiselect';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        FilterPageComponent
    ],
    exports: [
        FilterPageComponent
    ],
  imports: [
    CommonModule,
    DropdownModule,
    MultiSelectModule,
    ReactiveFormsModule
  ]
})
export class FilterPageModule { }
