import {EVENT_TYPES} from '../constants';
import {Component} from './component';
import {getPlannedEventTemplate} from '../templates/planned-event-template';
import {getValue} from '../utils';


class PlannedEvent extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = getValue(EVENT_TYPES, data.type);
    this._destination = data.destination;
    this._time = data.time;
    this._duration = data.duration;
    this._price = data.price;
    this._offer = data.offer;

    this._onPlannedEventClick = this._onPlannedEventClick.bind(this);
    this._onClick = null;
  }

  _onPlannedEventClick() {
    return typeof this._onClick === `function` && this._onClick();
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    return getPlannedEventTemplate(this._icon, this._type, this._time, this._duration, this._price, this._offer, this._destination);
  }

  bind() {
    this._element.addEventListener(`click`, this._onPlannedEventClick);
  }

  update(data) {
    this._destination = data.destination;
    this._price = data.price;
    this._type = data.type;
    this._icon = getValue(EVENT_TYPES, data.type);
    this._offer = data.offer;
    this._time = data.time;
    this._duration = data.duration;
  }
}


export {PlannedEvent};
