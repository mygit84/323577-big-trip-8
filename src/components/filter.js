import {getFilterTemplate} from '../templates/filter-template';
import {Component} from './component';

class Filter extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._isChecked = data.isChecked || false;

    this._onClickFilterButton = this._onClickFilterButton.bind(this);
    this._onFilter = null;
  }

  _onClickFilterButton(evt) {
    evt.preventDefault();

    if (typeof this._onFilter === `function`) {
      this._onFilter(evt);
    }
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return getFilterTemplate(this._title, this._isChecked);
  }

  bind() {
    this._element.addEventListener(`click`, this._onClickFilterButton);
  }
}


export {Filter};
