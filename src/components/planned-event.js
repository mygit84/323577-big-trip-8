import {EVENT_TYPES} from '../constants';
import {Component} from './component';
import {getPlannedEventTemplate} from '../templates/planned-event-template';
import {getValue} from '../utils';
import moment from 'moment';


class PlannedEvent extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = getValue(EVENT_TYPES, data.type);
    this._destination = data.destination;
    this._time = data.time;
    this._price = data.price;
    this._offer = data.offer;

    this._onPlannedEventClick = this._onPlannedEventClick.bind(this);
    this._onClick = null;
  }

  _onPlannedEventClick() {
    return typeof this._onClick === `function` && this._onClick();
  }

  _getDuration() {
    const start = moment(this._time.start, `HH:mm`);
    const end = moment(this._time.end, `HH:mm`);
    const duration = moment.utc(moment.duration(end.diff(start)).asMilliseconds());

    return duration.format(`H[h] m[m]`);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    return getPlannedEventTemplate(this._icon, this._type, this._time, this._getDuration(), this._price, this._offer, this._destination);
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
