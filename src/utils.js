const getIntervalNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomArray = () => Math.random() - 0.5;

const getNewArray = (arr) => {
  const randomNum = getIntervalNum(1, arr.length + 1);

  return arr.slice(0, randomNum);
};

const renderElement = (container, element) => {
  container.insertAdjacentHTML(`beforeEnd`, element);
};

const getCleanContainer = (container) => {
  container.innerHTML = ``;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const drawOffers = (offers, callback) => {

  return offers.map((item) =>
    callback(item)
  ).join(``);
};

export {getIntervalNum, getRandomElement, getRandomArray, getNewArray, renderElement, createElement, getCleanContainer, drawOffers};
