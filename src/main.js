import {getNewArray, renderElement, getCleanContainer} from '../src/utils';
import {drawFilters, getArrayFiltersButtons} from '../src/filters';
import {drawPlannedEvents} from '../src/planned-events';
import {drawOffers} from '../src/offers';

const CONTAINER_TRIP_ITEMS = document.querySelector(`.trip-day__items`);
const FILTERS = [
  {
    title: `Everything`,
    isChecked: true
  },
  {
    title: `Future`
  },
  {
    title: `Past`
  }
];
const PLANNED_EVENTS = [
  {
    icon: `<i class="trip-icon">🚕</i>`,
    title: `Taxi to Airport`,
    timetable: `10:00&nbsp;&mdash; 11:00`,
    duration: `1h 30m`
  },
  {
    icon: `<i class="trip-icon">✈️</i>`,
    title: `Flight to Geneva`,
    timetable: `14:00&nbsp;&mdash; 17:00`,
    duration: `3h`
  },
  {
    icon: `<i class="trip-icon">🏨</i>`,
    title: `Check into a hotel`,
    timetable: `22:00&nbsp;&mdash; 22:15`,
    duration: `15m`
  },
  {
    icon: `<i class="trip-icon">🚗</i>`,
    title: `Drive to Chamonix`,
    timetable: `05:00&nbsp;&mdash; 07:38`,
    duration: `2h 38m`
  },
  {
    icon: `<i class="trip-icon">🚗</i>`,
    title: `Check into a hotel`,
    timetable: `10:00&nbsp;&mdash; 11:00`,
    duration: `1h`
  },
  {
    icon: `<i class="trip-icon">✈️</i>`,
    title: `Taxi to Airport`,
    timetable: `22:00&nbsp;&mdash; 22:15`,
    duration: `15m`
  },
  {
    icon: `<i class="trip-icon">🏨</i>`,
    title: `Flight to Geneva`,
    timetable: `02:00&nbsp;&mdash; 22:15`,
    duration: `15h`
  }
];

const getFiltersButtonClickHandler = (element, i) => {
  element[i].addEventListener(`click`, () => {
    getCleanContainer(CONTAINER_TRIP_ITEMS);
    drawPlannedEvents(getNewArray(PLANNED_EVENTS), CONTAINER_TRIP_ITEMS, renderElement);
    drawOffers(renderElement, getNewArray);
  });
};

const onClickFilterButton = () => {
  const filtersButtons = getArrayFiltersButtons();

  Array.from(filtersButtons).forEach((element, i) => {
    getFiltersButtonClickHandler(filtersButtons, i);
  });
};

const setPlannedEventsElements = () => {
  drawPlannedEvents(PLANNED_EVENTS, CONTAINER_TRIP_ITEMS, renderElement);
  drawOffers(renderElement, getNewArray);
};

const setPageElements = () => {
  drawFilters(FILTERS, renderElement);
  setPlannedEventsElements();
};

setPageElements();
onClickFilterButton();
