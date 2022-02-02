import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-bar',
  templateUrl: './basic-bar.component.html',
  styleUrls: ['./basic-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicBarComponent implements OnInit, OnChanges {
  _height = '400px'
  @Input() title: string = '';
  @Input() scrollable: boolean = false;
  @Input() set height(data: number) {
    data && (this._height = data + 'px');
  }
  @Input() options: any;
  chartOptions: any;
  chartInstance: any;

  ngOnChanges() {
    this.chartOptions = {...this.options};
  }

  ngOnInit(): void {
    if (!this.scrollable) {
      this.chartOptions.dataZoom = false;
    }
  }
}
