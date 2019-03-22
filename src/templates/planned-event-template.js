import {getEventOfferTemplate} from '../templates/offer-template';


const drawOffersPlannedEventTemplate = (offers) => {

  return offers.map((item) =>
    getEventOfferTemplate(item)
  ).join(``);
};

const getPlannedEventTemplate = (icon, type, time, duration, price, offers, destination) => {
  return `<article class="trip-point">
    <i class="trip-icon">${icon}</i>

    <h3 class="trip-point__title">${type} to ${destination}</h3>

    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${time.start} &nbsp;&mdash; ${time.end}</span>
      <span class="trip-point__duration">${duration}</span>
    </p>

    <p class="trip-point__price">&euro;&nbsp;${price}</p>

    <ul class="trip-point__offers">
      ${drawOffersPlannedEventTemplate(offers)}
    </ul>

  </article>`;
};


export {getPlannedEventTemplate};
