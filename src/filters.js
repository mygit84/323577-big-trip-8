const CONTAINER_FILTERS = document.querySelector(`.trip-filter`);

const getFilter = (title, isChecked = false) => {
  return `<input
  type="radio"
  id="filter-${title}"
  name="filter"
  value="${title}"
  ${isChecked ? ` checked` : ``}>
  <label
  class="trip-filter__item"
  for="filter-${title}">
  ${title}
  </label>`;
};

const drawFilters = (arr, callback) => {
  arr.forEach((item) => {
    callback(CONTAINER_FILTERS, getFilter(item.title, item.isChecked));
  });
};

const getArrayFiltersButtons = () => {
  const arrayFiltersButton = document.querySelectorAll(`.trip-filter__item`);
  return arrayFiltersButton;
};

export {drawFilters, getArrayFiltersButtons};
