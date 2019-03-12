import {getEventOfferTemplate} from '../templates/offer-template';
import {drawOffers} from '../utils';


const getPlannedEventTemplate = (icon, title, timetable, duration, price, offers) => {
  return `<article class="trip-point">
    <i class="trip-icon">${icon}</i>

    <h3 class="trip-point__title">${title}</h3>

    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${timetable}</span>
      <span class="trip-point__duration">${duration}</span>
    </p>

    <p class="trip-point__price">&euro;&nbsp;${price}</p>

    <ul class="trip-point__offers">
      ${drawOffers(offers, getEventOfferTemplate)}
    </ul>

  </article>`;
};


export {getPlannedEventTemplate};
