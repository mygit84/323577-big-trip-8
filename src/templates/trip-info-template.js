const getTripInfo = (objectTripInfo) => {
  return `<div class="trip__schedule">
      <i class="trip-icon">⛰️</i>
      <h1 class="trip__points">${objectTripInfo.cities}</h1>
      <p class="trip__dates">${objectTripInfo.dates}</p>
    </div>
    <p class="trip__total">Total: <span class="trip__total-cost">${objectTripInfo.totalPrice}</span></p>`;
};

const drawTripInfoElement = (callback, container, objectTripInfo) => {
  callback(container, getTripInfo(objectTripInfo));
};


export {drawTripInfoElement};
