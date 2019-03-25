import {getNewArray, renderElement, getCleanContainer} from '../src/utils';
import {drawFilters, getArrayFiltersButtons} from '../src/filters';
import {drawTripInfoElement} from '../src/trip-info';
import {getObjectTripInfo} from '../src/mock-data/data-trip-info';
import {getArrayObjectsPlannedEvents} from '../src/mock-data/data-planned-events';
import {getNewArrayObjectsOffers} from '../src/mock-data/data-offers';
import {PlannedEvent} from '../src/components/planned-event';
import {PlannedEventEdit} from '../src/components/planned-event-edit';
import {EVENT_TYPES} from '../src/constants';


const CONTAINER_TRIP_ITEMS = document.querySelector(`.trip-day__items`);
const CONTAINER_TRIP_INFO = document.querySelector(`.trip`);


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
      item.icon = EVENT_TYPES.get(newObject.type);
      item.offer = newObject.offer;
      item.time = newObject.time;
      item.duration = newObject.duration;
      plannedEventComponent.update(item);
      plannedEventComponent.render();
      CONTAINER_TRIP_ITEMS.replaceChild(plannedEventComponent.element, editPlannedEventComponent.element);
    };

    editPlannedEventComponent.onReset = () => {
      CONTAINER_TRIP_ITEMS.replaceChild(plannedEventComponent.element, editPlannedEventComponent.element);
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
