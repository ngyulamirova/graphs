import {Component, Input, OnInit} from '@angular/core';

import * as XLSX from 'xlsx';
import {RawDataService} from '../../services/rawdata.service';
import {Router} from '@angular/router';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() blur = false;
  reader = new FileReader();

  constructor(private rawDataService: RawDataService,
              private loadingService: LoadingService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.loadingService.isLoading(true);
    setTimeout(()=>{
      this.getLocalXls();
    }, 200);

    let workBook: any = null;
    let jsonData = null;
    this.reader.onload = (event: any) => {
      const data = event.target.result;
      workBook = XLSX.read(data, {type: 'binary'});

      jsonData = workBook.SheetNames.reduce((initial: any, name: any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet, {header: 1, defval: 0, blankrows: true});
        return initial;
      }, {});
      this.rawDataService.setEmployeeData([...jsonData['TDSheet']]);
      this.rawDataService.setData([...jsonData['TDSheet']]);
      this.loadingService.isLoading(false);
    }
  }

  getLocalXls() {
    const _self = this;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/data/data.xls', true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        const myBlob = this.response;
        _self.reader.readAsBinaryString(myBlob);
      }
    };
    xhr.send();
  }

  uploadXls(ev: any) {
    const file = ev.files[0];
    this.loadingService.isLoading(true);
    this.reader.readAsBinaryString(file);
  }
}
