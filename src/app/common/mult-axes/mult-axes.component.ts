import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mult-axes',
  templateUrl: './mult-axes.component.html',
  styleUrls: ['./mult-axes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultAxesComponent implements OnInit {
  _height = '400px';
  @Input() data: any = null;
  @Input() chartOptions: any;
  @Input() set height(data: number) {
    data && (this._height = data + 'px');
  }

  ngOnInit(): void {
  }

}
