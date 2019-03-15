import {getIntervalNum, getRandomArray} from '../utils';
import {CITIES} from '../constants';


const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
const NumberOfCities = {
  MIN: 2,
  MAX: 6
};
const NumberOfWeeks = {
  MIN: 0,
  MAX: 3
};
const TotalPrice = {
  MIN: 500,
  MAX: 3000
};

const getCityElement = (city) => `${city}&nbsp;&mdash; `;

const getNumberCities = () => {
  const numberCities = getIntervalNum(NumberOfCities.MIN, NumberOfCities.MAX);

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

const getTripDateEnd = () => Date.now() + getIntervalNum(NumberOfWeeks.MIN, NumberOfWeeks.MAX) * MILLISECONDS_IN_WEEK;

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
