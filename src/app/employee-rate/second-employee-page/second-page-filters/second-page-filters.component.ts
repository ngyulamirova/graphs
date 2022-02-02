import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-second-page-filters',
  templateUrl: './second-page-filters.component.html',
  styleUrls: ['./second-page-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondPageFiltersComponent implements OnInit{
  form = this.fb.group({});
  @Output() selectedFiltersChange = new EventEmitter();
  @Input() selectList: any;
  @Input() value: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    Object.keys(this.selectList).forEach(element => this.form.addControl(element, new FormControl('')));
    this.form.patchValue(this.value);
    this.form.valueChanges.subscribe(change => this.selectedFiltersChange.emit(change));
  }
}
