import {EVENT_TYPES} from '../constants';
import {Component} from './component';
import {getPointDescriptionTemplate} from '../templates/point-description-template';
import {getNewArrayObjectsOffers} from '../mock-data/data-offers';
import {getValue} from '../utils';
import flatpickr from 'flatpickr';


const allOffers = getNewArrayObjectsOffers();


class PlannedEventEdit extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = getValue(EVENT_TYPES, data.type);
    this._destination = data.destination;
    this._time = data.time;
    this._duration = data.duration;
    this._price = data.price;
    this._allOffers = allOffers;
    this._offer = data.offer;
    this._description = data.description;
    this._photos = data.photos;
    this._isDelete = data.isDelete;

    this._onSaveButtonClick = this._onSaveButtonClick.bind(this);
    this._onSubmit = null;

    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._onDelete = null;

    this._onTypeButtonClick = this._onTypeButtonClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      destination: ``,
      price: ``,
      type: ``,
      icon: ``,
      offer: [],
      time: {
        start: ``,
        end: ``
      }
    };

    const plannedEventEditMapper = PlannedEventEdit.createMapper(entry);

    for (const [property, value] of formData.entries()) {

      if (plannedEventEditMapper[property]) {
        plannedEventEditMapper[property](value);
      }
    }

    return entry;
  }

  _onSaveButtonClick(evt) {
    evt.preventDefault();

    const formData = new FormData(this._element.querySelector(`form`));
    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }

    this.update(newData);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();

    return typeof this._onDelete === `function` && this._onDelete();
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  _onTypeButtonClick(evt) {
    const targetType = evt.target.value;

    this._element.querySelector(`.travel-way__label`).innerHTML = getValue(EVENT_TYPES, targetType);
    this._element.querySelector(`.point__destination-label`).innerHTML = `${targetType} to `;
    this._element.querySelector(`.travel-way__toggle`).checked = false;
  }

  get template() {
    return getPointDescriptionTemplate(this._icon, this._type, this._time, this._price, this._offer, this._allOffers, this._description, this._photos, EVENT_TYPES, this._destination);
  }

  bind() {
    this._element.querySelector(`form`).addEventListener(`submit`, this._onSaveButtonClick);
    this._element.querySelector(`.point__buttons [type="reset"]`).addEventListener(`click`, this._onDeleteButtonClick);

    this._element.querySelector(`.travel-way__select`).addEventListener(`change`, this._onTypeButtonClick);

    flatpickr(this._element.querySelector(`[name="time"]`), {
      mode: `range`,
      locale: {
        rangeSeparator: ` — `
      },
      enableTime: true,
      altInput: true,
      altFormat: `H:i`,
      dateFormat: `H:i`,
      time_24hr: true // eslint-disable-line
    });
  }

  update(data) {
    this._destination = data.destination;
    this._price = data.price;
    this._type = data.type;
    this._icon = getValue(EVENT_TYPES, data.type);
    this._offer = data.offer;
    this._time = data.time;
  }

  static createMapper(target) {

    return {
      price: (value) => {
        target.price = value;
      },
      destination: (value) => {
        target.destination = value;
      },
      [`travel-way`]: (value) => {
        target.type = value;
      },
      offer: (value) => {
        const offerInfo = allOffers.find((offer) => offer.name === value);
        target.offer.push({name: offerInfo.name, price: offerInfo.price});
      },
      time: (value) => ([target.time.start, target.time.end] = value.split(` — `))
    };
  }
}


export {PlannedEventEdit};
