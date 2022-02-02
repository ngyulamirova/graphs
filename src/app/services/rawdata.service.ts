import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {colors} from "../settings";

@Injectable({
  providedIn: 'root'
})
export class RawDataService {

  public database: any =  new BehaviorSubject<any>([]);
  public employee: any =  new BehaviorSubject<any>([]);

  constructor() { }

  setData(data: any) {
    let cleanData = data.splice(4).filter((row: any) =>{
      return row[5] === "ГПН-Ямал";
    });
    this.database.next(cleanData);
  }

  setEmployeeData(data: any) {
    let cleanData = data.splice(1, data.length - 1).map( (el: Array<string | number>) =>
      ({id: el[0],
        date: (new Date(el[2]) instanceof Date) && new Date(el[2]),
        manName: el[3],
        category: el[48],
        contractor: el[11],
        course: el[53],
        daughter: el[4],
        result: el[50],
        coach: el[51],
        profession: el[52],
        area: el[49]}))
    this.employee.next(cleanData);
  }

}
