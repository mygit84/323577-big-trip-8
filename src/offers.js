const OFFERS = [
  `Order UBER +&euro;&nbsp;20`,
  `Upgrade to business +&euro;&nbsp;20`,
  `Select meal +&euro;&nbsp;20`,
  `Rent a car +&euro;&nbsp;200`,
  `Add breakfast +&euro;&nbsp;20`
];

const getNewArrayOffers = (callback) => {
  const newArrayOffer = callback(OFFERS);

  return newArrayOffer;
};

const getEventOffer = (offer) => {
  return `<li>
  <button class="trip-point__offer">${offer}</button>
  </li>`;
};

const getArrayOffers = (container, callback, newArrayOffer) => {
  const offers = getNewArrayOffers(newArrayOffer);

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
