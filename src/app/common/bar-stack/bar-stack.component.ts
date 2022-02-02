import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter, AfterViewInit, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar-stack',
  templateUrl: './bar-stack.component.html',
  styleUrls: ['./bar-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarStackComponent implements OnInit, AfterViewInit {
  _height = '400px';
  _titleBottom: string | undefined;
  @Input() tag: string | undefined;
  @Input() set titleBottom(data: number) {
    data && (this._titleBottom = data + 'px');
  }
  @Input() title: string = '';
  @Input() scrollable: boolean = false;
  @Input() set height(data: number) {
    data && (this._height = data + 'px');
  }
  @Input() chartOptions: any;
  @Output() elementSelectionChange = new EventEmitter();

  ngOnInit() {
    if (!this.scrollable) this.chartOptions.dataZoom = false;
  }

  ngAfterViewInit(): void {
    let echartsObj = echarts.init(document.querySelector('#canvas') as any);
    echartsObj.on('click', (params) => {
      this.elementSelectionChange.emit(params.dataIndex)
    });
  }
}
