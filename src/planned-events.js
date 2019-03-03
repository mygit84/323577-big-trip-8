const getPlannedEvent = (icon, title, timetable, duration, price) => {
  return `<article class="trip-point">
    <i class="trip-icon">${icon}</i>
    <h3 class="trip-point__title">${title}</h3>
    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${timetable}</span>
      <span class="trip-point__duration">${duration}</span>
    </p>
    <p class="trip-point__price">&euro;&nbsp;${price}</p>
    <ul class="trip-point__offers">
    </ul>
  </article>`;
};

const drawPlannedEvents = (arr, container, callback) => {

  arr.forEach((item) => {
    callback(container, getPlannedEvent(item.icon, item.title, item.timetable, item.duration, item.price));
  });
};


export {drawPlannedEvents};
