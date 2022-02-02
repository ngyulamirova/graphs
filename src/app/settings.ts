import {EChartsOption} from 'echarts';

export const CoolTheme = {
  color: [
    '#b21ab4',
    '#6f0099',
    '#2a2073',
    '#0b5ea8',
    '#17aecc',
    '#b3b3ff',
    '#eb99ff',
    '#fae6ff',
    '#e6f2ff',
    '#eeeeee'
  ],

  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#00aecd'
    }
  },

  visualMap: {
    color: ['#00aecd', '#a2d4e6']
  },

  toolbox: {
    color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd']
  },

  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    axisPointer: {
      // Axis indicator, coordinate trigger effective
      type: 'line', // The default is a straight line： 'line' | 'shadow'
      lineStyle: {
        // Straight line indicator style settings
        color: '#00aecd',
        type: 'dashed'
      },
      crossStyle: {
        color: '#00aecd'
      },
      shadowStyle: {
        // Shadow indicator style settings
        color: 'rgba(200,200,200,0.3)'
      }
    }
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: '#eee', // Data background color
    fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
    handleColor: '#00aecd' // Handle color
  },

  timeline: {
    lineStyle: {
      color: '#00aecd'
    },
    controlStyle: {
      color: '#00aecd',
      borderColor: '00aecd'
    }
  },

  candlestick: {
    itemStyle: {
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    lineStyle: {
      width: 1,
      color: '#00aecd',
      color0: '#a2d4e6'
    },
    areaStyle: {
      color: '#b21ab4',
      color0: '#0b5ea8'
    }
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: '#b21ab4',
      borderWidth: 1,
      borderColor: 'rgba(128, 128, 128, 0.5)'
    },
    lineStyle: {
      color: 'rgba(128, 128, 128, 0.5)'
    },
    areaStyle: {
      color: '#0b5ea8'
    }
  },

  graph: {
    itemStyle: {
      color: '#b21ab4'
    },
    linkStyle: {
      color: '#2a2073'
    }
  },

  map: {
    itemStyle: {
      color: '#c12e34'
    },
    areaStyle: {
      color: '#ddd'
    },
    label: {
      color: '#c12e34'
    }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, '#dddddd'],
          [0.8, '#00aecd'],
          [1, '#f5ccff']
        ],
        width: 8
      }
    }
  }
};

export const HorizontalBarChartOptions: EChartsOption = {
  backgroundColor: '#353945',
  grid: {
    left: '210px',
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
  },
  series: [
    {type: 'bar', data: []},
    {type: 'bar', data: []},
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  dataZoom: [
    {
      type: 'slider',
      show: false,
      xAxisIndex: [0],
      filterMode: 'filter'
    },
    {
      type: 'slider',
      yAxisIndex: [0],
      filterMode: 'empty',
      start: 100,
      minSpan: 16,
      minValueSpan: 16,
      zoomLock: true,
      zoomOnMouseWheel: false,
      moveOnMouseWheel: true
    }
  ],
};

export const selectList = {
  breakdowns: {name: 'Разбивка', props: [{name: 'Год', value: 'year'}, {name: 'Месяц', value: 'month'}, {name: 'Квартал', value: 'quarter'}]},
  direction: { name: 'Направление обучения', props: [] as any},
  category: { name: 'Категории нарушений', props: [{name: 'Крупное', value: 'big'}, {name: 'Значительное', value: 'serious'}, {name: 'Незначительное', value: 'notSerious'}, {name: 'Без последствий', value: 'withoutBadResult'}]},
  type: {name: 'Вид происшествия', props: [] as any}};

export const OrganisationFilters = {
  breakdowns: {name: 'Разбивка', props: [{name: 'Подрядные организации', value: 'contractor'}, {name: 'Дочерние общества', value: 'daughter'}]},
  sort: {name: 'Сортировка', props: [{name: 'Cерьезные происшествия', value: 'Cерьезные происшествия'}, {name: 'Несерьезные происшествия', value: 'Несерьезные происшествия'}, {name: 'Завершено обучений к началу месяца', value: 'Завершено обучений к началу месяца'}, {name: 'Выявленные ОД/ОУ', value: 'Выявленные ОД/ОУ'}]}
}

export const ProfessionFilters = {
  breakdowns: {name: 'Разбивка', props: [{name: 'По профессиям', value: 'profession'}, {name: 'По сотрудникам', value: 'manName'}]},
  sort: {name: 'Сортировка', props: []}
}

export const colors = [{color: '#EF4646', title: 'Cерьезные происшествия'}, {color: '#FFDD66', title: 'Несерьезные происшествия'}, {color: '#45B26B', title: 'Завершено обучений к началу месяца'}, {color: '#4BC9F0', title: 'Выявленные ОД/ОУ'}];

export const legends = [{color: '#5470C6', title: 'Обученные'}, {color: '#EE6666', title: 'Необученные'}];

export const VerticalBarChartOptions: EChartsOption = {
  backgroundColor: '#353945',
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
    scale: true,
  },
  series: [
    {type: 'bar', data: []},
    {type: 'bar', data: []},
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  barCategoryGap :'10%',
};

export const PieChartOptions: EChartsOption = {
  backgroundColor: '#353945',
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },

      labelLine: {
        show: false
      },
      data: []
    }
  ]
};


export const LineTimeChartOptions: EChartsOption = {
  backgroundColor: '#353945',
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: '{dd} {MMM} {yyyy}'
    }
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true,
    },
  ],
};
export const months = ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];
export const years = ['2020', '2021'];
export const quarters = ['q1', 'q2', 'q3', 'q4'];

export const BarStackOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0',
    right: '4%',
    bottom: '3%',
    top: '20px',
    containLabel: true
  },
  backgroundColor: '#353945',
  xAxis: [
    {
      type: 'category',
      data: years,
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Выявленные ОД/ОУ',
      id: 'identified',
      type: 'bar',
      color: '#4BC9F0',
      barWidth: 8,
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Несерьезные происшествия',
      id: 'notSerious',
      type: 'bar',
      barWidth: 8,
      stack: 'events',
      color: '#FFDD66',
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Cерьезные происшествия',
      type: 'bar',
      id: 'serious',
      barWidth: 8,
      stack: 'events',
      color: '#EF4646',
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Завершено обучений к началу месяца',
      type: 'bar',
      id: 'studying',
      barWidth: 8,
      color: '#45B26B',
      emphasis: {
        focus: 'series'
      },
      data: []
    }
  ]
};
export const BarStackOptionsHorizontal = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '0',
    right: '4%',
    bottom: '0',
    top: '20px',
    containLabel: true
  },
  backgroundColor: '#353945',
  xAxis: [
    {
      type: 'value'
    }
  ],
  yAxis: [
    {
      type: 'category',
      scroll: true,
      data: [],
    }
  ],
  dataZoom: [{
    type: 'slider',
    xAxisIndex: [0],
    filterMode: 'empty',
    start: 0,
    minSpan: 16,
    minValueSpan: 16,
    zoomLock: true,
    zoomOnMouseWheel: false,
    moveOnMouseWheel: true
  },
    {
      type: 'slider',
      yAxisIndex: [0],
      filterMode: 'empty',
      start: 100,
      minSpan: 16,
      minValueSpan: 16,
      zoomLock: true,
      zoomOnMouseWheel: false,
      moveOnMouseWheel: true
    }],
  series: [
    {
      name: 'Выявленные ОД/ОУ',
      id: 'identified',
      type: 'bar',
      color: '#4BC9F0',
      barWidth: 8,
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Несерьезные происшествия',
      id: 'notSerious',
      type: 'bar',
      barWidth: 8,
      stack: 'events',
      color: '#FFDD66',
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Cерьезные происшествия',
      type: 'bar',
      id: 'serious',
      barWidth: 8,
      stack: 'events',
      color: '#EF4646',
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'Завершено обучений к началу месяца',
      type: 'bar',
      id: 'studying',
      barWidth: 8,
      color: '#45B26B',
      emphasis: {
        focus: 'series'
      },
      data: []
    }
  ]
};

export const HeatMapData =  {
  backgroundColor: '#353945',
  gradientColor: ['#45B26B', '#FFDD66', '#EF4646'],
  visualMap: {
    min: 0,
    max: 0,
    calculable: true,
    orient: 'horizontal',
    left: 0,
    bottom: 'bottom',
  },
  calendar: {
    top: 40,
    left: 20,
    cellSize: [22, 22],
    range: '2021',
    itemStyle: {
      borderWidth: 5,
      borderColor: '#353945',
    },
    splitLine: {
      lineStyle: {
        color: '#353945',
        width: 10
      }
    },
    yearLabel: {show: false}
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: [[]]
  }
};

export const barChartOptions = {
  xAxis: {
    type: 'category',
    data: years
  },
  grid: {
    left: '4%',
    right: '0',
    bottom: '3%',
    top: '20px',
    containLabel: true
  },
  backgroundColor: '#353945',
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [],
    color: '#EF4646',
    type: 'bar',
    barWidth: 20,
    borderRadius: 4,
    emphasis: {
      focus: 'series'
    },
  }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  dataZoom: [
    {
      type: 'slider',
      show: false,
      xAxisIndex: [0],
      filterMode: 'filter'
    },
    {
      type: 'slider',
      yAxisIndex: [0],
      filterMode: 'empty',
      start: 100,
      minSpan: 16,
      minValueSpan: 16,
      zoomLock: true,
      zoomOnMouseWheel: false,
      moveOnMouseWheel: true
    }
  ],
  barCategoryGap :'10%',
};

export const multiChartOptions = {
  color: ['#5470C6', '#EE6666'],
  backgroundColor: '#353945',
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    top: 70,
    bottom: 50
  },
  series: [
    {
      name: 'обученные',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: []
    },
    {
      name: 'необученные',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: []
    }],
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#5470C6'
        }
      },
      data: months
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: '#EE6666'
        }
      },
      data: months
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
};
