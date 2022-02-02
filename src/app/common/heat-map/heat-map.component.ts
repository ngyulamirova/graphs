import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import {HeatMapData} from "../../settings";
import {MapDataService} from "../../services/map-data.service";

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeatMapComponent implements OnChanges{
  options = HeatMapData;
  @Input() data: any;
  @Input() title: string = '';
  @Output() daySelectionChange = new EventEmitter();
  chartOptions: any;
  chartInstance: any;

   constructor(private cdr: ChangeDetectorRef,
               private mapDataService: MapDataService) {
   }

  ngOnChanges(changes: SimpleChanges) {
    if (this.data) {
      this.options.series.data = this.mapDataService.getHeatMapData(this.data);
      this.options.visualMap.max = Math.max(...this.options.series.data.map((el: Array<string | number>) => +el[1]));
    }
    this.chartOptions = {...this.options};
    this.cdr.markForCheck()
  }
}
