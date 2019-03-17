import {EVENT_TYPES} from '../constants';
import {Component} from './component';
import {getPlannedEventTemplate} from '../templates/planned-event-template';


class PlannedEvent extends Component {
  constructor(data) {
    super();
    this._type = data.type;
    this._icon = EVENT_TYPES.get(data.type);
    this._title = data.title;
    this._timetable = data.timetable;
    this._duration = data.duration;
    this._price = data.price;
    this._offers = data.offers;

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
    return getPlannedEventTemplate(this._icon, this._title, this._timetable, this._duration, this._price, this._offers);
  }

  bind() {
    this._element.addEventListener(`click`, this._onPlannedEventClick);
  }
}


export {PlannedEvent};
