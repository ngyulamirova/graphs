import { Injectable } from '@angular/core';
import * as echarts from "echarts";
import {months, quarters, years} from "../settings";

@Injectable({
  providedIn: 'root'
})
export class MapDataService {
  getHeatMapData(data: any): any {
    const year = '2021';
    let date = +echarts.number.parseDate(year + '-01-01');
    let end = +echarts.number.parseDate((+year + 1) + '-01-01');
    let dayTime = 3600 * 24 * 1000;
    let newData = [];
    for (let time = date; time <= end; time += dayTime) {
      const dataValue = echarts.format.formatTime('yyyy-MM-dd', time, true);
      const dataValueArr = dataValue.split('-');
      const value = data?.filter((el: any) => el.date && ((el.date?.getMonth() + 1) === +dataValueArr[1]) && (el.date?.getDate() === +dataValueArr[2]))
      newData.push([dataValue, value.find((el: any) => el.category === 'Обучение') ? null : value.length]);
    }
    return newData;
  }

  getYearData(data: any): any {
    let result: {identified: number[], notSerious:  number[], serious: number[], studying: number[], sum: number[]} = {identified: [], notSerious: [], serious: [], studying: [], sum: []};
    years.forEach((year, i) => {
      result.serious[i] = data.filter((el: any) => (+new Date(el.date).getFullYear() == +year) && ((el.category == 'Значительное') || (el.category == 'Крупное'))).length || 0;
      result.notSerious[i] = data.filter((el: any) =>  (+new Date(el.date).getFullYear() == +year) && ((el.category == 'Без последствий') || (el.category == 'Незначительное'))).length || 0;
      result.studying[i] = data.filter((el: any) =>  (+new Date(el.date).getFullYear() == +year) && ((el.category == 'Обучение'))).length || 0;
      result.identified[i] = data.filter((el: any) =>  (+new Date(el.date).getFullYear() == +year) && ((el.category == 'ОД/ОУ'))).length || 0;
      result.sum[i] = result.serious[i] +  result.notSerious[i] + result.studying[i] + result.identified[i];
      }
    );
    return result;
  }

  getQuarterData(data: any) {
    let result: {identified: number[], notSerious:  number[], serious: number[], studying: number[]} = {identified: [], notSerious: [], serious: [], studying: []};
    quarters.forEach((_, i) => {
        result.serious[i] = data.filter((el: any) => (i * 3 <= +new Date(el.date).getMonth() && +new Date(el.date).getMonth() < ((i + 1) * 3))
          && ((el.category == 'Значительное') || (el.category == 'Крупное'))).length || 0;
        result.notSerious[i] = data.filter((el: any) => (i * 3 <= +new Date(el.date).getMonth() && +new Date(el.date).getMonth() < ((i + 1) * 3))
          && ((el.category == 'Без последствий') || (el.category == 'Незначительное'))).length || 0;
        result.studying[i] = data.filter((el: any) => (i * 3 <= +new Date(el.date).getMonth() && +new Date(el.date).getMonth() < ((i + 1) * 3)) && ((el.category == 'Обучение'))).length || 0;
        result.identified[i] = data.filter((el: any) => (i * 3 <= +new Date(el.date).getMonth() && +new Date(el.date).getMonth() < ((i + 1) * 3)) && ((el.category == 'ОД/ОУ'))).length || 0;
      }
    );
    return result;
  }

  getMonthData(data: any): any {
    let result: {identified: number[], notSerious:  number[], serious: number[], studying: number[]} = {identified: [], notSerious: [], serious: [], studying: []};
    months.forEach((_, i) => {
        result.serious[i] = data.filter((el: any) => (+new Date(el.date).getMonth() == i)
          && ((el.category == 'Значительное') || (el.category == 'Крупное'))).length || 0;
        result.notSerious[i] = data.filter((el: any) => (+new Date(el.date).getMonth() == i)
          && ((el.category == 'Без последствий') || (el.category == 'Незначительное'))).length || 0;
        result.studying[i] = data.filter((el: any) => (+new Date(el.date).getMonth() == i) && ((el.category == 'Обучение'))).length || 0;
        result.identified[i] = data.filter((el: any) => (+new Date(el.date).getMonth() == i) && ((el.category == 'ОД/ОУ'))).length || 0;
      }
    );
    return result;
  }

  getDayData(data: any, day: string): any {
    let result: {identified: number[], notSerious:  number[], serious: number[], studying: number[]} = {identified: [], notSerious: [], serious: [], studying: []};
    result.serious[0] = data.filter((el: any) =>
      (+new Date(el.date).getMonth() == +new Date(day).getMonth()) &&
      (+new Date(el.date).getDate() == +new Date(day).getDate()) &&
      ((el.category == 'Значительное') || (el.category == 'Крупное'))).length;
    result.notSerious[0] = data.filter((el: any) =>
      (+new Date(el.date).getMonth() == +new Date(day).getMonth()) &&
      (+new Date(el.date).getDate() == +new Date(day).getDate()) &&
      ((el.category == 'Без последствий') || (el.category == 'Незначительное'))).length;
    result.studying[0] = data.filter((el: any) => (+new Date(el.date).getDate() == +new Date(day).getDate()) && (+new Date(el.date).getMonth() == +new Date(day).getMonth()) && ((el.category == 'Обучение'))).length;
    result.identified[0] = data.filter((el: any) => (+new Date(el.date).getDate() == +new Date(day).getDate()) && (+new Date(el.date).getMonth() == +new Date(day).getMonth()) && ((el.category == 'ОД/ОУ'))).length;
    return result;
  }

  getFilteredData(data: any, filters: any) {
    if (filters?.category && filters?.category.length) {
      const category = filters.category.map((element: any) => element.name);
      data = data.filter((el:any) => category.indexOf(el.category) > -1);
    }
    if (filters?.type && filters?.type.length) {
      const type = filters.type.map((element: any) => element.name);
      data = data.filter((el:any) => type.indexOf(el.area) > -1);
    }
    if (filters?.direction && filters?.direction.length) {
      const type = filters.direction.map((element: any) => element.name);
      data = data.filter((el:any) => type.indexOf(el.course) > -1);
    }
    return data;
  }

  getSecondPageData(data: any, array: any, breakdown: string) {
    let result: {identified: number[], notSerious:  number[], serious: number[], studying: number[]} = {identified: [], notSerious: [], serious: [], studying: []};
    array.forEach((element: any, i: number) => {
        result.serious[i] = data.filter((el: any) => (el[breakdown] === element) && ((el.category == 'Значительное') || (el.category == 'Крупное'))).length;
        result.notSerious[i] = data.filter((el: any) =>  (el[breakdown] === element) && ((el.category == 'Без последствий') || (el.category == 'Незначительное'))).length;
        result.studying[i] = data.filter((el: any) =>  (el[breakdown] === element) && ((el.category == 'Обучение'))).length;
        result.identified[i] = data.filter((el: any) => (el[breakdown] === element) && ((el.category == 'ОД/ОУ'))).length;
      }
    );
    return result;
  }

  equalizeCategory(value: string, category: string) {
    switch (value) {
      case 'Cерьезные происшествия': return (category == 'Значительное') || (category == 'Крупное')
      case 'Несерьезные происшествия': return (category == 'Без последствий') || (category == 'Незначительное')
      case 'Завершено обучений к началу месяца': return (category == 'Обучение')
      case 'Выявленные ОД/ОУ': return (category == 'ОД/ОУ')
    }
    return false;
  }
}
