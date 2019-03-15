const getEventOfferTemplate = (offer) => {
  return `<li>
  <button class="trip-point__offer">${offer}</button>
  </li>`;
};

const getOfferPointDescriptionTemplate = (offer) => {
  return `<input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="choose-seats">
  <label for="choose-seats" class="point__offers-label">
    <span class="point__offer-service">${offer}</span>
  </label>`;
};


export {getEventOfferTemplate, getOfferPointDescriptionTemplate};
