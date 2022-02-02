import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RawDataService} from '../services/rawdata.service';
import {colors, selectList} from '../settings';
import {ActivatedRoute, Router} from "@angular/router";
import {MapDataService} from "../services/map-data.service";

@Component({
  selector: 'app-employee-rate',
  templateUrl: './employee-rate.component.html',
  styleUrls: ['./employee-rate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeRateComponent implements OnInit {
  step = 1;
  colors = colors;
  data: any;
  selectedFilters  = [];
  filtredData: any;
  selectList = selectList;

  constructor(private rawDataService: RawDataService,
              public router: Router,
              private cdr: ChangeDetectorRef,
              private mapDataService: MapDataService,
              private route: ActivatedRoute) {
    const query = +this.route.snapshot.queryParams['step'];
    query && (query === 1 || query === 2) ? (this.step = query) : this.router.navigate([], { queryParams: {step: this.step}});
  }

  ngOnInit(): void {
    this.rawDataService.employee.subscribe((data: any) => {
      this.data = data;
      this.getFilters();
      this.filtersChange(this.selectedFilters);
      this.cdr.markForCheck();
    });
  }

  filtersChange = (filters: any) => {
    this.selectedFilters = {...filters};
    if (this.data?.length) this.filtredData = this.mapDataService.getFilteredData( [...this.data], this.selectedFilters);
  }

  getFilters() {
    this.selectList.direction.props = [];
    this.selectList.type.props = [];
     this.data.forEach((el: any) => {
       el.course && (this.selectList.direction.props.indexOf(el.course) < 0) && this.selectList.direction.props.push(el.course);
       el.area && (this.selectList.type.props.indexOf(el.area) < 0) && this.selectList.type.props.push(el.area);
     });
    this.selectList.direction.props = this.selectList.direction.props.map((el: any, i: number) => ({name: el, value: i.toString()}));
    this.selectList.type.props = this.selectList.type.props.map((el: any, i: number) => ({name: el, value: i.toString()}));
  }
}
