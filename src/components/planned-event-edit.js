import {EVENT_TYPES} from '../constants';
import {getPointDescriptionTemplate} from '../templates/point-description-template';
import {createElement} from '../utils';


class PlannedEventEdit {
  constructor(data) {
    this._type = data.type;
    this._icon = EVENT_TYPES.get(data.type);
    this._timetable = data.timetable;
    this._price = data.price;
    this._offers = data.offers;
    this._description = data.description;
    this._photos = data.photos;

    this._element = null;
    this._onSubmit = null;
    this._onReset = null;
  }

  _onSaveButtonClick(evt) {
    evt.preventDefault();

    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();

    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return getPointDescriptionTemplate(this._icon, this._type, this._timetable, this._price, this._offers, this._description, this._photos);
  }

  bind() {
    const form = this._element.querySelector(`form`);

    form.addEventListener(`submit`, this._onSaveButtonClick.bind(this));
    form.addEventListener(`reset`, this._onDeleteButtonClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();

    return this._element;
  }
}


export {PlannedEventEdit};
