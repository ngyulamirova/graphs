import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {barChartOptions, BarStackOptions, years, months, quarters} from "../../settings";
import {MapDataService} from "../../services/map-data.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-first-employee-page',
  templateUrl: './first-employee-page.component.html',
  styleUrls: ['./first-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstEmployeePageComponent implements OnChanges{
  @Input() data: any;
  @Input() filtredData: any;
  @Input() filters: any;
  dateData: any;
  stackBarData: any;
  chartOptions: any;
  title = '';

  constructor(private mapDataService: MapDataService) {
  }

  changeDay(data: any) {
    this.dateData = {...BarStackOptions, xAxis: {...BarStackOptions.xAxis, data: [formatDate(new Date(data.data[0]),'MMM', 'ru')]}};
    this.title = formatDate(new Date(data.data[0]),'dd MMM', 'ru');
    const newData = this.mapDataService.getDayData(this.mapDataService.getFilteredData([...this.data], this.filters), data.data[0]);
    this.dateData.series = this.dateData.series.map((el: any) => {
      el.data = newData[el.id];
      return el;
    });
  }

  ngOnChanges(changes:SimpleChanges) {
    this.dateData = null;
    this.stackBarData = {...BarStackOptions};
    let newData: any = [];
    switch (this.filters?.breakdowns) {
      case 'year': {
        this.stackBarData.xAxis[0].data = years;
        newData = this.mapDataService.getYearData(this.filtredData);
        break;
      }
      case 'month': {
        this.stackBarData.xAxis[0].data = months;
        newData = this.mapDataService.getMonthData(this.filtredData);
        break;
      }
      case 'quarter': {
        this.stackBarData.xAxis[0].data = quarters;
        newData = this.mapDataService.getQuarterData(this.filtredData);
        break;
      }
      default: {
        this.stackBarData.xAxis[0].data = years;
        newData = this.mapDataService.getYearData(this.filtredData);
        break;
      }
    }
    this.stackBarData.series = this.stackBarData.series.map((el: any) => {
        el.data = newData[el.id];
        return el;
      });
    this.chartOptions = {...barChartOptions};
    this.chartOptions.series[0].data =this.mapDataService.getYearData(this.filtredData).sum;
  }
}
