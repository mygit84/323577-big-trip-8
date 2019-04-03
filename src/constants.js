const EVENT_TYPES = new Map([
  [`Taxi`, `🚕`],
  [`Bus`, `🚌`],
  [`Train`, `🚂`],
  [`Ship`, `🛳️`],
  [`Transport`, `🚊`],
  [`Drive`, `🚗`],
  [`Flight`, `✈️`],
  [`Check-in`, `🏨`],
  [`Sightseeing`, `🏛️`],
  [`Restaurant `, `🍴`]
]);

const CITIES = [
  `Amsterdam`,
  `Geneva`,
  `Paris`,
  `Vienna`,
  `Prague`,
  `Cairo`,
  `Tallinn`,
  `Dublin`,
  `Rome`,
  `Stockholm`,
  `Washington`,
  `Caracas`,
  `Moscow`,
  `London`
];

const OFFERS = [
  `Add luggage`,
  `Switch to comfort class`,
  ` Add meal`,
  `Choose seats`
];

const FILTERS = [
  {
    title: `Everything`,
    isChecked: true
  },
  {
    title: `Future`
  },
  {
    title: `Past`
  }
];


export {EVENT_TYPES, CITIES, OFFERS, FILTERS};
