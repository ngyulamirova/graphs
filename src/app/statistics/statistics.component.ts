import {Component, OnInit} from '@angular/core';
import {EChartsOption} from 'echarts';
import {RawDataService} from '../services/rawdata.service';
import {
  CoolTheme,
  HorizontalBarChartOptions,
  LineTimeChartOptions,
  PieChartOptions,
  VerticalBarChartOptions
} from '../settings';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  data: Array<any> = [];

  sortingDO: Option[];
  sortDO: any = 'od';
  sortOPO: any = 'od';
  sortPO: any = 'od';

  ODOUDO_ChartData: any;
  ODOU_YearChartData: any;
  OPO_ChartData: any;
  ODOUPO_ChartData: any;
  ODOU_chartData: any;
  PBP_ChartData: any;

  constructor(private rawDataService: RawDataService) {
    this.sortingDO = [
      {
        label: 'По количеству ОД',
        value: 'od',

      },
      {
        label: 'По количеству ОУ',
        value: 'ou',

      },
      {
        label: 'По алфавиту',
        value: 'name',

      }
    ];
  }


  ngOnInit(): void {
    this.rawDataService.database.subscribe((data: any) => {
      if (data && data.length) {
        setTimeout(() => {
          this.data = data;
          this.getDataForODOUChart();
          this.getDataForODOUODChart();
          this.getDataForOPOChart();
          this.getDataForPOChart();
          this.getDataForPBP();
        }, 500);
      }

    });

  }

  // пайчарт
  getDataForPBP() {
    const d = [...this.data];
    const convert: any = d.map((row: any) => {
      return {
        od: row[36],
        ou: row[37],
        pbp: row[40],
        done: row[41],
        total: row[39]
      }
    }).reduce((acc: any, v: any) => {
      return {
        od: v.od + acc.od,
        ou: v.ou + acc.ou,
        pbp: v.pbp + acc.pbp,
        done: v.done + acc.done,
        total: v.total + acc.total,
      }
    });

    this.PBP_ChartData = {
      legend: {
        data: ['Опасные действия', 'Опасные условия', 'Происшествие без последствий', 'Устранено на месте', 'Могло привести к смертельному исходу'],
        bottom: 0,
        borderRadius: 0,
      },
      series: [{
        data: [
          {
            value: convert.od,
            name: 'Опасные действия'
          },
          {
            value: convert.ou,
            name: 'Опасные условия'
          },
          {
            value: convert.pbp,
            name: 'Происшествие без последствий'
          },
          {
            value: convert.done,
            name: 'Устранено на месте'
          },
          {
            value: convert.total,
            name: 'Могло привести к смертельному исходу'
          }
        ]
      }]
    };
  }

  // подрядные организации
  getDataForPOChart() {
    const d = [...this.data];
    const convert = d.map((row: any) => {
      return {
        od: row[36],
        ou: row[37],
        org: row[11]
      }
    });

    const set = new Set(convert.map(d => d.org).filter(d => typeof(d) == 'string'));
    let convertedData: any = {};
    set.forEach((org: any) => {
      convertedData[org] = {
        od: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.od
        }, 0),
        ou: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.ou
        }, 0),
      }
    });

    let dataArray = [];
    for (let key in convertedData) {
      dataArray.push({...convertedData[key], name: key});
    }
    console.log('po data array', dataArray, this.sortPO)
    const sortValue = this.sortPO;
    dataArray.sort((a, b) => {
      if (a[sortValue] > b[sortValue]) {
        return 1;
      } else if (a[sortValue] < b[sortValue]) {
        return -1;
      } else {
        return 0;
      }
    });

    this.ODOUPO_ChartData = {
      series: [{
        name: 'ОД',
        data: this.addCustomColor(dataArray.map(d => d.od), '#FF6B6B')
      }, {
        name: 'ОУ',
        data: this.addCustomColor(dataArray.map(d => d.ou), '#DEC481')
      }],
      yAxis: {
        data: dataArray.map(d=>d.name)
      },
    };
  }


  //  структурные подразделения
  getDataForOPOChart() {
    const d = [...this.data];
    const convert = d.map((row: any) => {
      return {
        od: row[36],
        ou: row[37],
        org: row[8]
      }
    });

    const set = new Set(convert.map(d => d.org).filter(d => typeof(d) == 'string'));
    let convertedData: any = {};
    set.forEach((org: any) => {
      convertedData[org] = {
        od: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.od
        }, 0),
        ou: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.ou
        }, 0),
      }
    });

    let dataArray = [];
    for (let key in convertedData) {
      dataArray.push({...convertedData[key], name: key});
    }
    const sortValue = this.sortOPO;
    dataArray.sort((a, b) => {
      if (a[sortValue] > b[sortValue]) {
        return 1;
      } else if (a[sortValue] < b[sortValue]) {
        return -1;
      } else {
        return 0;
      }
    });

    this.OPO_ChartData = {
      series: [{
        type: 'bar',
        name: 'ОД',
        data: this.addCustomColor(dataArray.map(d => d.od), '#FF6B6B')
      }, {
        type: 'bar',
        name: 'ОУ',
        data: this.addCustomColor(dataArray.map(d => d.ou), '#DEC481')
      }],
      yAxis: {
        data: dataArray.map(d => d.name)
      },
      grid: {
        left: '200px',
      },
    };

  }

  getDataForODOUODChart() {
    console.log('getDataForODOUODChart');
    const d = [...this.data];
    const convert = d.map((row: any) => {
      return {
        od: row[36],
        ou: row[37],
        org: row[4]
      }
    });
    const set = new Set(convert.map(d => d.org).filter(d => typeof(d) == 'string'));
    let convertedData: any = {};
    set.forEach((org: any) => {
      convertedData[org] = {
        od: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.od
        }, 0),
        ou: convert.filter(c => c.org === org).reduce((acc, v) => {
          return acc + v.ou
        }, 0),
      }
    });


    let dataArray = [];
    for (let key in convertedData) {
      dataArray.push({...convertedData[key], name: key});
    }
    const sortValue = this.sortDO;
    dataArray.sort((a, b) => {
      if (a[sortValue] > b[sortValue]) {
        return 1;
      } else if (a[sortValue] < b[sortValue]) {
        return -1;
      } else {
        return 0;
      }
    });


    console.log('convertedData', dataArray);


    this.ODOUDO_ChartData = {
      legend: {
        data: ['Опасные действия', 'Опасные условия'],
        bottom: 0,
        borderRadius: 0,
      },
      series: [{
        type: 'bar',
        name: 'ОД',
        data: this.addCustomColor(dataArray.map(d => d.od), '#FF6B6B')
      }, {
        name: 'ОУ',
        type: 'bar',
        data: this.addCustomColor(dataArray.map(d => d.ou), '#DEC481')
      }],
      yAxis: {
        data: dataArray.map(d => d.name)
      }
    };

  }

  addCustomColor(data: any, color: string) {
    switch (color) {
      case 'yellow':
        return data.map((d: any) => {
          return {value: d, name: d, itemStyle: {color: '#DEC481', borderColor: '#DEC481'}}
        });
      case 'red':
        return data.map((d: any) => {
          return {value: d, name: d, itemStyle: {color: '#FF6B6B', borderColor: '#FF6B6B'}}
        });
      default:
        return data.map((d: any) => {
          return {value: d, name: d, itemStyle: {color: color, borderColor: color}}
        })
    }

  }

  getDataForODOUChart() {
    const d = [...this.data];
    const convert = d.map((row: any) => {
      return {
        date: row[2],
        od: row[36],
        ou: row[37]
      }
    });
    const set = new Set(convert.map(d => d.date));
    let convertedData: any = {};
    set.forEach(date => {
      convertedData[date] = {
        od: convert.filter(c => c.date === date).reduce((acc, v) => {
          return acc + v.od
        }, 0),
        ou: convert.filter(c => c.date === date).reduce((acc, v) => {
          return acc + v.ou
        }, 0)
      }
    });

    let seriesData: any = [];
    for (let key in convertedData) {
      seriesData.push([
        this.convertToDateFormat(key),
        convertedData[key].od + convertedData[key].ou
      ]);
    }
    this.ODOU_chartData = {
      series: [{
        data: seriesData
      }]
    };

    //  для годового графика

    let seriesDataOU: any = [];
    let seriesDataOD: any = [];
    for (let key in convertedData) {
      seriesDataOU.push(convertedData[key].ou);
      seriesDataOD.push(convertedData[key].od);
    }

    const totalOU = seriesDataOU.reduce((acc: any, v: any) => {
      return acc + v
    }, 0);
    const totalOD = seriesDataOD.reduce((acc: any, v: any) => {
      return acc + v
    }, 0);


    this.ODOU_YearChartData = {
      legend: {
        data: [...this.addCustomColor(['Опасные действия'], 'red'), ...this.addCustomColor(['Опасные условия'], 'yellow')],
        bottom: 0,
        borderRadius: 0,
      },
      series: [{
        name: 'Опасные действия',
        data: this.addCustomColor([this.getRandomValue(totalOD * 12, 0.1), totalOD * 12], 'red'),
      }, {
        name: 'Опасные условия',
        data: this.addCustomColor([this.getRandomValue(totalOU * 12, 0.1), totalOU * 12], 'yellow')
      }],
      xAxis: {
        type: 'category',
        data: ['2020', '2021']
      }
    };
  }

  getRandomValue(v: number, percentage: number) {
    return Math.floor(Math.random() * (v * (1 + percentage)) + v * (1 - percentage));
  }

  convertToDateFormat(date: string) {
    return new Date(`${date.split('.')[2]}/${date.split('.')[1]}/${date.split('.')[0]}`).getTime();
  }


}


interface Option {
  label: string,
  value: string
}
