import {getOfferId} from '../utils';


const getEventOfferTemplate = (offer) => {
  return `<li>
    <button class="trip-point__offer">${offer.name} +&euro;&nbsp;${offer.price}</button>
  </li>`;
};

const getOfferPointDescriptionTemplate = (offer, chosenOffers) => {
  const idName = getOfferId(offer.name);
  const checked = chosenOffers.some((chosenOffer) => chosenOffer.name === offer.name);

  return `<input class="point__offers-input visually-hidden" type="checkbox" id="${idName}" name="offer" value="${offer.name}"
    ${checked ? `checked` : ``}>
  <label for="${idName}" class="point__offers-label">
    <span class="point__offer-service">${offer.name}</span> + €<span class="point__offer-price">${offer.price}</span>
  </label>`;
};


export {getEventOfferTemplate, getOfferPointDescriptionTemplate};
