import {getNewArray, renderElement, getCleanContainer} from '../src/utils';
import {drawFilters, getArrayFiltersButtons} from '../src/filters';
import {drawPlannedEvents} from '../src/planned-events';
import {drawOffers} from '../src/offers';
import {drawTripInfoElement} from '../src/trip-info';
import {getObjectTripInfo} from '../src/mock-data/data-trip-info';
import {getOffersElements} from '../src/mock-data/data-offers';
import {getArrayObjectsPlannedEvents} from '../src/mock-data/data-planned-events';


const CONTAINER_TRIP_ITEMS = document.querySelector(`.trip-day__items`);
const CONTAINER_TRIP_INFO = document.querySelector(`.trip`);


const setCleanContainers = () => {
  getCleanContainer(CONTAINER_TRIP_ITEMS);
  getCleanContainer(CONTAINER_TRIP_INFO);
};

const getFiltersButtonClickHandler = (element, i) => {
  element[i].addEventListener(`click`, () => {
    setCleanContainers();
    drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
    drawPlannedEvents(getNewArray(getArrayObjectsPlannedEvents()), CONTAINER_TRIP_ITEMS, renderElement);
    drawOffers(renderElement, getOffersElements);
  });
};

const onClickFilterButton = () => {
  const filtersButtons = getArrayFiltersButtons();

  Array.from(filtersButtons).forEach((element, i) => {
    getFiltersButtonClickHandler(filtersButtons, i);
  });
};

const setPlannedEventsElements = () => {
  drawPlannedEvents(getArrayObjectsPlannedEvents(), CONTAINER_TRIP_ITEMS, renderElement);
  drawOffers(renderElement, getOffersElements);
};

const setPageElements = () => {
  drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
  drawFilters(renderElement);
  setPlannedEventsElements();
};

setPageElements();
onClickFilterButton();
