import {ChangeDetectionStrategy, Component, Output, EventEmitter, Input} from '@angular/core';
import {selectList} from '../../settings';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterPageComponent {
  @Input() selectList: any;
  form = this.fb.group({});
  @Output() selectedFiltersChange = new EventEmitter();

  constructor(private fb: FormBuilder) {
    Object.keys(selectList).forEach(element => this.form.addControl(element, new FormControl('')));
    this.form.valueChanges.subscribe(change => this.selectedFiltersChange.emit(change));
  }
}
