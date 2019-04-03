const getFilterTemplate = (title, isChecked) => {
  const filterName = title.toLowerCase();

  return `<span>
    <input type="radio" id="filter-${filterName}" name="filter" value="${filterName}"
      ${isChecked ? ` checked` : ``}/>
    <label class="trip-filter__item" for="filter-${filterName}">
      ${filterName}
    </label>
  </span>`;
};


export {getFilterTemplate};
