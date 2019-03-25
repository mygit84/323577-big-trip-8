import {OFFERS} from '../constants';
import {getIntervalNum, getRandomArray} from '../utils';


const NumberOfOffers = {
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
  const numberOffers = getIntervalNum(NumberOfOffers.MIN, NumberOfOffers.MAX + 1);

  return numberOffers;
};

const getNewArrayObjectsOffers = () => {
  const newArrayObjectsOffers = [];

  OFFERS.forEach((item) => {
    newArrayObjectsOffers.push({name: `${item}`, price: getRandomOfferPrice()});
  });

  return newArrayObjectsOffers;
};

const getRandomArrayObjectsOffers = () => {
  const arrayObjectsOffers = getNewArrayObjectsOffers();
  const randomArrayObjectsOffers = arrayObjectsOffers.sort(getRandomArray).slice(0, getNumberOffers());

  return randomArrayObjectsOffers;
};


export {getNewArrayObjectsOffers, getRandomArrayObjectsOffers};
