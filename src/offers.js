const getEventOffer = (offer) => {
  return `<li>
  <button class="trip-point__offer">${offer}</button>
  </li>`;
};

const getArrayOffers = (container, callback, newArrayOffer) => {
  const offers = newArrayOffer();

  offers.forEach((item) => {
    callback(container, getEventOffer(item));
  });
};

const getArrayOffersContainers = () => {
  const arrayOffersContainers = document.querySelectorAll(`.trip-point__offers`);

  return arrayOffersContainers;
};

const drawOffers = (callback, newArrayOffer) => {
  const offersContainers = getArrayOffersContainers();

  Array.from(offersContainers).forEach((item) => {
    getArrayOffers(item, callback, newArrayOffer);
  });
};


export {drawOffers};
