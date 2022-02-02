import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MapDataService} from "../../services/map-data.service";
import {
  BarStackOptionsHorizontal,
  months,
  multiChartOptions,
  OrganisationFilters,
  ProfessionFilters,
  legends
} from "../../settings";
declare var require: any
const _ = require('lodash');

@Component({
  selector: 'app-second-employee-page',
  templateUrl: './second-employee-page.component.html',
  styleUrls: ['./second-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondEmployeePageComponent implements OnChanges {
  @Input() filters: any;
  @Input() data: any;
  @Input() filtredData: any;
  organisationStackBarData: any;
  professionStackBarData: any;
  organisationHeight: any;
  professionHeight: any;
  selectedFilters = {breakdowns: 'contractor', sort: 'Cерьезные происшествия'};
  bottomFilters = {breakdowns: 'profession', sort: null}
  organisationFilters = OrganisationFilters;
  professionFilters = ProfessionFilters;
  multiChartOptions: any;
  legends = legends;

  constructor(private mapDataService: MapDataService) {
  }

  organizationFiltersChange(filters: any){
    this.selectedFilters = {...filters}
    this.getData();
  }

  professionFiltersChange(filters: any){
    this.bottomFilters = {...filters}
    this.getData();
  }

  ngOnChanges(changes:SimpleChanges) {
    this.getData();
  }

  getData() {
    let organizations: any = [];
    let professions: any = [];
    this.filtredData.forEach((el: any) => {
      el[this.selectedFilters.breakdowns] && (organizations.indexOf(el[this.selectedFilters.breakdowns]) < 0) && organizations.push(el[this.selectedFilters.breakdowns]);
      el[this.bottomFilters.breakdowns] && (professions.indexOf(el[this.bottomFilters.breakdowns]) < 0) && professions.push(el[this.bottomFilters.breakdowns]);
    });
    if (this.selectedFilters.sort.length) {
      organizations = [...organizations].map((el: any) => ({name: el, value: this.filtredData.filter((element: any) => this.mapDataService.equalizeCategory(this.selectedFilters.sort, element.category) && (el === element[this.selectedFilters.breakdowns])).length})).sort((a: any, b: any) => a.value > b.value ? 1 : -1).map((el: any) => el.name);
    }
    this.organisationStackBarData = _.cloneDeep(BarStackOptionsHorizontal);
    this.professionStackBarData = _.cloneDeep(BarStackOptionsHorizontal);
    this.multiChartOptions = null;
    this.organisationStackBarData.yAxis[0].data = organizations;
    this.professionStackBarData.yAxis[0].data = professions;
    const newData: any = this.mapDataService.getSecondPageData(this.filtredData, organizations, this.selectedFilters.breakdowns);
    const newBottomData: any = this.mapDataService.getSecondPageData(this.filtredData, professions, this.bottomFilters.breakdowns);
    this.organisationStackBarData.series = this.organisationStackBarData.series.map((el: any) => {
      el.data = newData[el.id];
      return el;
    });
    this.professionStackBarData.series = this.professionStackBarData.series.map((el: any) => {
      el.data = newBottomData[el.id];
      return el;
    });
    this.organisationHeight = organizations.length * 33;
    this.professionHeight = professions.length * 33;
  }

  getCurseData(id: number) {
    const educated = [...this.filtredData.filter((el: any) => (el[this.bottomFilters.breakdowns] == this.professionStackBarData.yAxis[0].data[id]) && (el.category === 'Обучение') && ((el.result === 'Завершено (тест сдан)') || (el.result === 'Завершено (частично)')))];
    const men = [...this.filtredData.filter((el: any) => (el[this.bottomFilters.breakdowns] == this.professionStackBarData.yAxis[0].data[id]) && (el.category === 'Обучение'))];
    this.multiChartOptions = _.cloneDeep(multiChartOptions);
    this.multiChartOptions.series[0].data = months.map((el: any, i: number) => educated.filter((educate: any) => educate.date.getMonth() === i).length);
    this.multiChartOptions.series[1].data = months.map((el: any, i: number) =>  (men.filter((educate: any) => educate.date.getMonth() === i).length - this.multiChartOptions.series[0].data[i]));
  }
}
