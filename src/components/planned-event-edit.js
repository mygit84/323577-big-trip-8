import {EVENT_TYPES} from '../constants';
import {Component} from './component';
import {getPointDescriptionTemplate} from '../templates/point-description-template';


class PlannedEventEdit extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = EVENT_TYPES.get(data.type);
    this._timetable = data.timetable;
    this._price = data.price;
    this._offers = data.offers;
    this._description = data.description;
    this._photos = data.photos;

    this._onSaveButtonClick = this._onSaveButtonClick.bind(this);
    this._onSubmit = null;

    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
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

  get template() {
    return getPointDescriptionTemplate(this._icon, this._type, this._timetable, this._price, this._offers, this._description, this._photos);
  }

  bind() {
    const form = this._element.querySelector(`form`);

    form.addEventListener(`submit`, this._onSaveButtonClick);
    form.addEventListener(`reset`, this._onDeleteButtonClick);
  }
}


export {PlannedEventEdit};
