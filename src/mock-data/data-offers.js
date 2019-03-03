import {getIntervalNum, getRandomArray} from '../utils';


const OFFERS = [
  `Add luggage`,
  `Switch to comfort class`,
  ` Add meal`,
  `Choose seats`
];
const NumberOffers = {
  MIN: 0,
  MAX: 2
};
const OfferPrice = {
  MIN: 15,
  MAX: 60
};


const getRandomOfferPrice = () => {
  const offerPrice = getIntervalNum(OfferPrice.MIN, OfferPrice.MAX);

  return offerPrice;
};

const getNumberOffers = () => {
  const numberOffers = getIntervalNum(NumberOffers.MIN, NumberOffers.MAX + 1);

  return numberOffers;
};

const getNewArrayOffers = () => {
  const newArrayOffers = OFFERS.sort(getRandomArray).slice(0, getNumberOffers());

  return newArrayOffers;
};

const getOffersElements = () => {
  const arrayOffers = getNewArrayOffers();
  const arrayOffersElement = [];

  arrayOffers.forEach((element) => {
    arrayOffersElement.push(element + ` +&euro;&nbsp;` + getRandomOfferPrice());
  });

  return arrayOffersElement;
};


export {getOffersElements};
