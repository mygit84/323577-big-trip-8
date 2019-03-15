import {EVENT_TYPES} from '../constants';
import {getPlannedEventTemplate} from '../templates/planned-event-template';
import {createElement} from '../utils';


class PlannedEvent {
  constructor(data) {
    this._type = data.type;
    this._icon = EVENT_TYPES.get(data.type);
    this._title = data.title;
    this._timetable = data.timetable;
    this._duration = data.duration;
    this._price = data.price;
    this._offers = data.offers;

    this._element = null;
    this._onClick = null;
  }

  _onPlannedEventClick() {
    return typeof this._onClick === `function` && this._onClick();
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return getPlannedEventTemplate(this._icon, this._title, this._timetable, this._duration, this._price, this._offers);
  }

  bind() {
    this._element.addEventListener(`click`, this._onPlannedEventClick.bind(this));
  }

  render() {
    this._element = createElement(this.template);
    this.bind();

    return this._element;
  }
}


export {PlannedEvent};
