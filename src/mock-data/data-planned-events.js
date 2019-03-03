import {getIntervalNum, getRandomElement, getRandomArray} from '../utils';


const MAX_NUMBER_EVENTS = 7;
const TITLES = [`Taxi to Airport`, `Flight to Geneva`, `Check into hotel`, `Supper at restaurant`];
const EVENT_TYPES = new Map([
  [`Taxi`, `🚕`],
  [`Bus`, `🚌`],
  [`Train`, `🚂`],
  [`Ship`, `🛳️`],
  [`Transport`, `🚊`],
  [`Drive`, `🚗`],
  [`Flight`, `✈️`],
  [`Check-in`, `🏨`],
  [`Sightseeing`, `🏛️`],
  [`Restaurant `, `🍴`]
]);
const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis
at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex,
convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris,
condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit,
eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const NumberHours = {
  MIN: 0,
  MAX: 24
};
const NumberMinutes = {
  MIN: 0,
  MAX: 59
};
const Price = {
  MIN: 100,
  MAX: 1000
};
const NumberProposals = {
  MIN: 1,
  MAX: 3
};


const getArrayIcon = () => {
  const arrayIcon = [];

  EVENT_TYPES.forEach((value) => {
    arrayIcon.push(value);
  });

  return arrayIcon;
};

const getRandomIcon = () => {
  const randomIcon = getRandomElement(getArrayIcon());

  return randomIcon;
};

const getHours = () => {
  const randomHours = getIntervalNum(NumberHours.MIN, NumberHours.MAX);
  const hour = `${randomHours < 10 ? `0${randomHours}` : randomHours}`;

  return hour;
};

const getMinutes = () => {
  const randomMinutes = getIntervalNum(NumberMinutes.MIN, NumberMinutes.MAX);
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

const getObjectPlannedEvent = () => ({
  title: getRandomElement(TITLES),
  icon: getRandomIcon(),
  timetable: getTimeTableEvent(),
  duration: getDurationEvent(),
  price: getIntervalNum(Price.MIN, Price.MAX),
  photo: `http://picsum.photos/300/150?r=${Math.random()}`,
  description: DESCRIPTION.split(`. `).sort(getRandomArray).slice(NumberProposals.MIN, NumberProposals.MAX + 1).join(``),
});

const getArrayObjectsPlannedEvents = () => {
  const plannedEvents = [];

  for (let i = 0; i < MAX_NUMBER_EVENTS; i++) {
    plannedEvents.push(getObjectPlannedEvent());
  }

  return plannedEvents;
};


export {getArrayObjectsPlannedEvents};
