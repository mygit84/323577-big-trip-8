const getIntervalNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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

export {getNewArray, renderElement, getCleanContainer};
