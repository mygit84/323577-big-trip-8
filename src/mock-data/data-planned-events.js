import {EVENT_TYPES, CITIES} from '../constants';
import {getIntervalNum, getRandomElement, getRandomArray} from '../utils';
import {getRandomArrayObjectsOffers} from '../mock-data/data-offers';


const MAX_NUMBER_EVENTS = 7;
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

const getRandomDestination = () => {
  const randomDestination = getRandomElement(CITIES);

  return randomDestination;
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

const getRandomNumberPhotos = () => getIntervalNum(NumberOfPhotos.MIN, NumberOfPhotos.MAX);

const getArrayPhotos = () => {
  const numberPhotos = getRandomNumberPhotos();
  const arrayPhotos = new Array(numberPhotos).fill().map(() => `http://picsum.photos/300/150?r=${Math.random()}`);

  return arrayPhotos;
};

const getObjectPlannedEvent = () => ({
  type: getRandomType(),
  destination: getRandomDestination(),
  time: {
    start: getTime(),
    end: getTime()
  },
  price: getIntervalNum(Price.MIN, Price.MAX),
  photos: getArrayPhotos(),
  description: DESCRIPTION.split(`. `).sort(getRandomArray).slice(NumberOfProposals.MIN, NumberOfProposals.MAX + 1).join(``),
  offer: getRandomArrayObjectsOffers(),
  isDelete: false
});


const getArrayObjectsPlannedEvents = () => {
  const plannedEvents = new Array(MAX_NUMBER_EVENTS).fill().map(() => getObjectPlannedEvent());

  return plannedEvents;
};


export {getArrayObjectsPlannedEvents};
