import {getIntervalNum, getRandomArray} from '../utils';


const DAY_PER_WEEK = 7;
const HOUR_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const MILLISECONDS_IN_WEEK = DAY_PER_WEEK * HOUR_PER_DAY * MINUTES_PER_HOUR
  * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
const CITIES = [
  `Amsterdam`,
  `Geneva`,
  `Paris`,
  `Vienna`,
  `Prague`,
  `Cairo`,
  `Tallinn`,
  `Dublin`,
  `Rome`,
  `Stockholm`,
  `Washington`,
  `Caracas`,
  `Moscow`,
  `London`
];
const NumberCities = {
  MIN: 2,
  MAX: 6
};
const NumberWeeks = {
  MIN: 0,
  MAX: 3
};
const TotalPrice = {
  MIN: 500,
  MAX: 3000
};

const getCityElement = (city) => `${city}&nbsp;&mdash; `;

const getNumberCities = () => {
  const numberCities = getIntervalNum(NumberCities.MIN, NumberCities.MAX);

  return numberCities;
};

const getNewArrayCities = () => {
  const newArrayCities = CITIES.sort(getRandomArray).slice(0, getNumberCities());

  return newArrayCities;
};

const getStringCities = () => {
  const newArrayCities = getNewArrayCities();

  const stringCities = newArrayCities.map((city, i) => {
    if (i === newArrayCities.length - 1) {
      return city;
    } else {
      return getCityElement(city);
    }
  }).join(``);

  return stringCities;
};

const getTripDateStart = () => Date.now() + MILLISECONDS_IN_WEEK;

const getTripDateEnd = () => Date.now() + getIntervalNum(NumberWeeks.MIN, NumberWeeks.MAX) * MILLISECONDS_IN_WEEK;

const getTripDate = () => {
  const dateStart = getTripDateStart();
  const dateEnd = getTripDateEnd();
  const tripDate = `${new Date(dateStart).toLocaleDateString(`en-gb`, {month: `short`})} &nbsp; ${new Date(dateStart).toLocaleDateString(`en-gb`, {day: `2-digit`})}&nbsp; &mdash;&nbsp; ${new Date(dateEnd).toLocaleDateString(`en-gb`, {month: `short`})} &nbsp;${new Date(dateEnd).toLocaleDateString(`en-gb`, {day: `2-digit`})}&nbsp;`;

  return tripDate;
};

const getTotalPrice = () => {
  const numberTotalPrice = getIntervalNum(TotalPrice.MIN, TotalPrice.MAX);

  return `&euro;&nbsp; ${numberTotalPrice}`;
};

const getObjectTripInfo = () => ({
  cities: getStringCities(),
  dates: getTripDate(),
  totalPrice: getTotalPrice()
});


export {getObjectTripInfo};
