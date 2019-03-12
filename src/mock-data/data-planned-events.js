import {EVENT_TYPES} from '../constants';
import {getIntervalNum, getRandomElement, getRandomArray} from '../utils';
import {getOffersElements} from '../mock-data/data-offers';


const MAX_NUMBER_EVENTS = 7;
const TITLES = [`Taxi to Airport`, `Flight to Geneva`, `Check into hotel`, `Supper at restaurant`];
const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis
at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex,
convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris,
condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit,
eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const NumberOfHours = {
  MIN: 0,
  MAX: 24
};
const NumberOfMinutes = {
  MIN: 0,
  MAX: 59
};
const Price = {
  MIN: 100,
  MAX: 1000
};
const NumberOfProposals = {
  MIN: 1,
  MAX: 3
};
const NumberOfPhotos = {
  MIN: 0,
  MAX: 5
};


const getArrayType = () => {
  const arrayType = [];

  EVENT_TYPES.forEach((value, key) => {
    arrayType.push(key);
  });

  return arrayType;
};

const getRandomType = () => {
  const randomType = getRandomElement(getArrayType());

  return randomType;
};

const getHours = () => {
  const randomHours = getIntervalNum(NumberOfHours.MIN, NumberOfHours.MAX);
  const hour = `${randomHours < 10 ? `0${randomHours}` : randomHours}`;

  return hour;
};

const getMinutes = () => {
  const randomMinutes = getIntervalNum(NumberOfMinutes.MIN, NumberOfMinutes.MAX);
  const minutes = `${randomMinutes < 10 ? `0${randomMinutes}` : randomMinutes}`;

  return minutes;
};

const getTime = () => {
  const hour = getHours();
  const minutes = getMinutes();
  const time = `${hour}:${minutes}`;

  return time;
};

const getTimeTableEvent = () => {
  const timeTable = `${getTime()} &nbsp;&mdash; ${getTime()}`;

  return timeTable;
};

const getDurationEvent = () => {
  const duration = `${getHours()}H ${getMinutes()}M`;

  return duration;
};

const getRandomNumberPhotos = () => getIntervalNum(NumberOfPhotos.MIN, NumberOfPhotos.MAX);

const getArrayPhotos = () => {
  const numberPhotos = getRandomNumberPhotos();
  const arrayPhotos = new Array(numberPhotos).fill().map(() => `http://picsum.photos/300/150?r=${Math.random()}`);

  return arrayPhotos;
};

const getObjectPlannedEvent = () => ({
  title: getRandomElement(TITLES),
  type: getRandomType(),
  timetable: getTimeTableEvent(),
  duration: getDurationEvent(),
  price: getIntervalNum(Price.MIN, Price.MAX),
  photos: getArrayPhotos(),
  description: DESCRIPTION.split(`. `).sort(getRandomArray).slice(NumberOfProposals.MIN, NumberOfProposals.MAX + 1).join(``),
  offers: getOffersElements()
});

const getArrayObjectsPlannedEvents = () => {
  const plannedEvents = new Array(MAX_NUMBER_EVENTS).fill().map(() => getObjectPlannedEvent());

  return plannedEvents;
};


export {getArrayObjectsPlannedEvents};
