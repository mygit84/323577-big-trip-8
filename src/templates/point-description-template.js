import {getOfferPointDescriptionTemplate} from '../templates/offer-template';


const LENGTH_ARRAY_TRANSPORTS = 7;
const LENGTH_ARRAY_EVENTS = 3;


const getImagePointDescription = (photos) => {
  return photos.map((item) =>
    `<img src="${item}" alt="picture from place" class="point__destination-image">`
  ).join(``);
};

const getSelectGroup = (eventTypes, type, value1, value2) => {
  return Array.from(eventTypes.keys()).slice(value1, value2).map((item) =>
    `<input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-${item}" name="travel-way" value="${item}"
    ${(item === type) ? `checked` : ``}>
    <label class="travel-way__select-label" for="travel-way-${item}">${eventTypes.get(item)} ${item}</label>`
  ).join(``);
};

const drawOffersPointDescriptionTemplate = (offers, chosenOffers) => {

  return offers.map((item) =>
    getOfferPointDescriptionTemplate(item, chosenOffers)
  ).join(``);
};

const getPointDescriptionTemplate = (icon, type, time, price, chosenOffers, offers, description, photos, eventTypes, destination) => {
  return `<article class="point">
    <form action="" method="get">
      <header class="point__header">
        <label class="point__date">
          choose day
          <input class="point__input" type="text" placeholder="MAR 18" name="day">
        </label>

        <div class="travel-way">
          <label class="travel-way__label" for="travel-way__toggle">${icon}</label>

          <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">

          <div class="travel-way__select">
            <div class="travel-way__select-group">
              ${getSelectGroup(eventTypes, type, 0, LENGTH_ARRAY_TRANSPORTS)}
            </div>

            <div class="travel-way__select-group">
              ${getSelectGroup(eventTypes, type, -LENGTH_ARRAY_EVENTS)}
            </div>
          </div>
        </div>

        <div class="point__destination-wrap">
          <label class="point__destination-label" for="destination">${type} to </label>
          <input class="point__destination-input" list="destination-select" id="destination" value="${destination}" name="destination">
          <datalist id="destination-select">
            <option value="airport"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
            <option value="hotel"></option>
          </datalist>
        </div>

        <label class="point__time">
          choose time
          <input class="point__input" type="text" value="${time.start} — ${time.end}" name="time" placeholder="00:00 — 00:00">
        </label>

        <label class="point__price">
          write price
          <span class="point__price-currency">€</span>
          <input class="point__input" type="text" value="${price}" name="price">
        </label>

        <div class="point__buttons">
          <button class="point__button point__button--save" type="submit">Save</button>
          <button class="point__button" type="reset">Delete</button>
        </div>

        <div class="paint__favorite-wrap">
          <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite">
          <label class="point__favorite" for="favorite">favorite</label>
        </div>
      </header>

      <section class="point__details">
        <section class="point__offers">
          <h3 class="point__details-title">offers</h3>

          <div class="point__offers-wrap">
            ${drawOffersPointDescriptionTemplate(offers, chosenOffers)}
          </div>

        </section>
        <section class="point__destination">
          <h3 class="point__details-title">Destination</h3>
          <p class="point__destination-text">${description}</p>
          <div class="point__destination-images">
            ${getImagePointDescription(photos)}
          </div>
        </section>
        <input type="hidden" class="point__total-price" name="total-price" value="">
      </section>
    </form>
  </article>`;
};


export {getPointDescriptionTemplate};
