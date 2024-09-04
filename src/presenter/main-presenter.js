import createEventTemplate from '../view/event-view.js';
import createFormAddTemplate from '../view/form-add-view.js';
import createFormEditTemplate from '../view/form-edit-view.js';

import {render} from './render.js';


export default class MainPresenter {
  createEventComponent = new createEventTemplate();
  createFormAddComponent = new createFormAddTemplate();
  createFormEditComponent = new createFormEditTemplate();

  init() {
    render(new createEventComponent());
    render(new createEventComponent());
    render(new createFormEditComponent());
  }
}
