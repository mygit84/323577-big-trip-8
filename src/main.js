import {PlannedEvent} from '../src/components/planned-event';
import {PlannedEventEdit} from '../src/components/planned-event-edit';
import {Filter} from '../src/components/filter';
import {EVENT_TYPES, FILTERS} from '../src/constants';
import {drawTripInfoElement} from '../src/templates/trip-info-template';
import {getObjectTripInfo} from '../src/mock-data/data-trip-info';
import {getArrayObjectsPlannedEvents} from '../src/mock-data/data-planned-events';
import {getNewArrayObjectsOffers} from '../src/mock-data/data-offers';
import {getStatistic} from '../src/statistic';
import moment from 'moment';
import {
  renderElement,
  getCleanContainer,
  getValue,
  getElementAddedClass,
  getElementRemovedClass,
  getElementContainingClass,
  getButtonClickHandler
} from '../src/utils';


const MAIN = document.querySelector(`.main`);
const CONTAINER_TRIP_ITEMS = document.querySelector(`.trip-day__items`);
const CONTAINER_TRIP_INFO = document.querySelector(`.trip`);
const CONTAINER_FILTERS = document.querySelector(`.trip-filter`);
const CONTAINER_STATISTIC = document.querySelector(`.statistic`);
const BUTTON_TABLE = document.querySelector(`.view-switch__item[href="#table"]`);
const BUTTON_STATISTIC = document.querySelector(`.view-switch__item[href="#stats"]`);
const ACTIVE_BUTTON_CLASS = `view-switch__item--active`;
const INACTIVE_WINDOW_CLASS = `visually-hidden`;
const arrayObjectsPlannedEvents = getArrayObjectsPlannedEvents();


const setCleanContainers = () => {
  getCleanContainer(CONTAINER_TRIP_ITEMS);
  getCleanContainer(CONTAINER_TRIP_INFO);
};

const drawPlannedEvents = (arr) => {
  arr.forEach((item) => {
    const plannedEventComponent = new PlannedEvent(item);
    const editPlannedEventComponent = new PlannedEventEdit(item, getNewArrayObjectsOffers());

    CONTAINER_TRIP_ITEMS.appendChild(plannedEventComponent.render());

    plannedEventComponent.onClick = () => {
      editPlannedEventComponent.render();
      CONTAINER_TRIP_ITEMS.replaceChild(editPlannedEventComponent.element, plannedEventComponent.element);
    };

    editPlannedEventComponent.onSubmit = (newObject) => {
      item.destination = newObject.destination;
      item.price = newObject.price;
      item.type = newObject.type;
      item.icon = getValue(EVENT_TYPES, newObject.type);
      item.offer = newObject.offer;
      item.time = newObject.time;
      item.duration = newObject.duration;
      plannedEventComponent.update(item);
      plannedEventComponent.render();
      CONTAINER_TRIP_ITEMS.replaceChild(plannedEventComponent.element, editPlannedEventComponent.element);
    };

    editPlannedEventComponent.onDelete = () => {
      item.isDelete = true;
      CONTAINER_TRIP_ITEMS.removeChild(editPlannedEventComponent.element);
    };
  });
};

const filterEvents = (events, filterId) => {
  let result;

  switch (filterId) {
    case `filter-everything`:
      result = events;
      break;

    case `filter-future`:
      result = events.filter((item) => item !== null &&
      moment(item.time.start, `HH:mm`).valueOf() > Date.now());
      break;

    case `filter-past`:
      result = events.filter((item) => item !== null &&
      moment(item.time.end, `HH:mm`).valueOf() < Date.now());
      break;
  }

  return result;
};

const drawFilters = (arr) => {
  arr.forEach((item) => {
    const filterComponent = new Filter(item);

    CONTAINER_FILTERS.appendChild(filterComponent.render());

    filterComponent.onFilter = (evt) => {
      const filter = evt.target.id || evt.target.htmlFor;
      const filteredEvents = filterEvents(arrayObjectsPlannedEvents, filter);

      setCleanContainers();
      drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
      drawPlannedEvents(filteredEvents);
    };
  });
};

const onBtnStatisticClick = (evt) => {
  evt.preventDefault();

  const target = evt.target;

  if (!getElementContainingClass(target, ACTIVE_BUTTON_CLASS)) {
    getElementRemovedClass(BUTTON_TABLE, ACTIVE_BUTTON_CLASS);
    getElementAddedClass(target, ACTIVE_BUTTON_CLASS);
    getElementAddedClass(MAIN, INACTIVE_WINDOW_CLASS);
    getElementRemovedClass(CONTAINER_STATISTIC, INACTIVE_WINDOW_CLASS);
    getStatistic(arrayObjectsPlannedEvents);
  }
};

const onBtnTableClick = (evt) => {
  evt.preventDefault();

  const target = evt.target;

  if (!getElementContainingClass(target, ACTIVE_BUTTON_CLASS)) {
    getElementRemovedClass(BUTTON_STATISTIC, ACTIVE_BUTTON_CLASS);
    getElementAddedClass(target, ACTIVE_BUTTON_CLASS);
    getElementAddedClass(MAIN, INACTIVE_WINDOW_CLASS);
    getElementRemovedClass(CONTAINER_STATISTIC, INACTIVE_WINDOW_CLASS);
    getElementRemovedClass(MAIN, INACTIVE_WINDOW_CLASS);
    getElementAddedClass(CONTAINER_STATISTIC, INACTIVE_WINDOW_CLASS);
  }
};

const setPageElements = () => {
  drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
  drawFilters(FILTERS);
  drawPlannedEvents(arrayObjectsPlannedEvents);
  getButtonClickHandler(BUTTON_STATISTIC, onBtnStatisticClick);
  getButtonClickHandler(BUTTON_TABLE, onBtnTableClick);
};

setPageElements();
