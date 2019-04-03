import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import moment from 'moment';
import {EVENT_TYPES} from './constants';
import {getValue} from './utils';

const CANVAS_MONEY = document.querySelector(`.statistic__money`);
const CANVAS_TRANSPORT = document.querySelector(`.statistic__transport`);
// const CANVAS_TIME = document.querySelector(`.statistic__time-spend`);
const BAR_HEIGHT = 55;

let moneyChart = null;
let transportChart = null;
// let timeChart = null;

/* const getDurationEvents = (objectTime) => {
  const timeStart = objectTime.start;
  const timeEnd = objectTime.end;
  let duration;

  if (timeEnd > timeStart) {
    duration = timeEnd - timeStart;
  }
  if (timeEnd < timeStart) {
    duration = timeStart - timeEnd;
  }
console.log(duration);
  return duration;
}; */

const getTypeEvent = (data) => {
  const result = {};
  data.forEach((item) => {
    const typeName = `${getValue(EVENT_TYPES, item.type)} ${item.type}`;
    if (result[typeName]) {
      result[typeName]++;
    } else {
      result[typeName] = 1;
    }
  });

  return {
    labels: Object.keys(result),
    values: Object.values(result),
    title: `TRANSPORT`,
    formatter: (val) => `${val}x`,
  };
};

const getPriceEvents = (data) => {
  let result = {};

  data.forEach((item) => {
    let typeName = `${getValue(EVENT_TYPES, item.type)} ${item.type}`;
    if (!result[typeName]) {
      result[typeName] = 0;
    }
    result[typeName] += +item.price;
  });

  return {
    labels: Object.keys(result),
    values: Object.values(result),
    title: `MONEY`,
    formatter: (val) => `€ ${val}`,
  };
};

/* const getTotalDurationEvents = (data) => {
  let result = {};
  data.forEach((item) => {
    let typeName = `${getValue(EVENT_TYPES, item.type)} ${item.type}`;
    if (!result[typeName]) {
      result[typeName] = getDurationEvents(item.time);
    } else {
      result[typeName] += getDurationEvents(item.time);
    }
  });

  return {
    labels: Object.keys(result),
    values: Object.values(result).map((item) => moment.utc(item).format(`h`)),
    title: `TIME SPENT`,
    formatter: (val) => `${val}H`,
  };
}; */

const createHorizontalBarChart = (canvasElement, chartData) => {
  const chart = new Chart(canvasElement, {
    plugins: [ChartDataLabels],
    type: `horizontalBar`,
    data: {
      labels: chartData.labels,
      datasets: [{
        data: chartData.values,
        backgroundColor: `#ffffff`,
        hoverBackgroundColor: `#ffffff`,
        anchor: `start`,
      }],
    },
    options: {
      plugins: {
        datalabels: {
          font: {
            size: 13,
          },
          color: `#000000`,
          anchor: `end`,
          align: `start`,
          formatter: chartData.formatter,
        },
      },
      title: {
        display: true,
        text: chartData.title,
        fontColor: `#000000`,
        fontSize: 23,
        position: `left`,
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: `#000000`,
            padding: 5,
            fontSize: 13,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          barThickness: 44,
        }],
        xAxes: [{
          ticks: {
            display: false,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          minBarLength: 50,
        }],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  });
  chart.height = BAR_HEIGHT * chartData.values.length;
  return chart;
};

const updateChart = (chart, data) => {
  chart.data.labels = data.labels.map((item) => item.toUpperCase());
  chart.data.datasets[0].data = data.values;
  chart.height = BAR_HEIGHT * data.values.length;
  chart.update();
};

const getStatistic = (data) => {
  let moneyData = getPriceEvents(data);
  let transportData = getTypeEvent(data);
  // let timeData = getTotalDurationEvents(data);

  if (!moneyChart) {
    moneyChart = createHorizontalBarChart(CANVAS_MONEY, moneyData);
    transportChart = createHorizontalBarChart(CANVAS_TRANSPORT, transportData);
    // timeChart = createHorizontalBarChart(CANVAS_TIME, timeData);
  }

  updateChart(moneyChart, moneyData);
  updateChart(transportChart, transportData);
  // updateChart(timeChart, timeData);
};


export {getStatistic};
