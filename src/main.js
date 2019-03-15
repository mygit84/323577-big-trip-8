import {getNewArray, renderElement, getCleanContainer} from '../src/utils';
import {drawFilters, getArrayFiltersButtons} from '../src/filters';
import {drawTripInfoElement} from '../src/trip-info';
import {getObjectTripInfo} from '../src/mock-data/data-trip-info';
import {getArrayObjectsPlannedEvents} from '../src/mock-data/data-planned-events';
import {PlannedEvent} from '../src/components/planned-event';
import {PlannedEventEdit} from '../src/components/planned-event-edit';


const CONTAINER_TRIP_ITEMS = document.querySelector(`.trip-day__items`);
const CONTAINER_TRIP_INFO = document.querySelector(`.trip`);


const drawPlannedEvents = (arr) => {
  arr.forEach((item) => {
    const plannedEventComponent = new PlannedEvent(item);
    const editPlannedEventComponent = new PlannedEventEdit(item);
    const plannedEventElement = plannedEventComponent.render();
    const editPlannedEventElement = editPlannedEventComponent.render();

    CONTAINER_TRIP_ITEMS.appendChild(plannedEventElement);

    plannedEventComponent.onClick = () => {
      CONTAINER_TRIP_ITEMS.replaceChild(editPlannedEventElement, plannedEventElement);
    };

    editPlannedEventComponent.onSubmit = () => {
      CONTAINER_TRIP_ITEMS.replaceChild(plannedEventElement, editPlannedEventElement);
    };

    editPlannedEventComponent.onReset = () => {
      CONTAINER_TRIP_ITEMS.replaceChild(plannedEventElement, editPlannedEventElement);
    };
  });
};

const setCleanContainers = () => {
  getCleanContainer(CONTAINER_TRIP_ITEMS);
  getCleanContainer(CONTAINER_TRIP_INFO);
};

const getFiltersButtonClickHandler = (element, i) => {
  element[i].addEventListener(`click`, () => {
    setCleanContainers();
    drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
    drawPlannedEvents(getNewArray(getArrayObjectsPlannedEvents()));
  });
};

const onClickFilterButton = () => {
  const filtersButtons = getArrayFiltersButtons();

  Array.from(filtersButtons).forEach((element, i) => {
    getFiltersButtonClickHandler(filtersButtons, i);
  });
};

const setPageElements = () => {
  drawTripInfoElement(renderElement, CONTAINER_TRIP_INFO, getObjectTripInfo());
  drawFilters(renderElement);
  drawPlannedEvents(getArrayObjectsPlannedEvents());
};

setPageElements();
onClickFilterButton();
