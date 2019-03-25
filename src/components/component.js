import {createElement} from '../utils';


class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate BaseComponent, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {}

  update() {}

  render() {
    this._element = createElement(this.template);
    this.bind();

    return this._element;
  }
}


export {Component};
