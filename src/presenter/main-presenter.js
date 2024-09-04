import {render} from '../render.js';

import createFilterTemplate from '../view/filter-view.js';
import createSortTemplate from '../view/sort-view.js';
import createEventTemplate from '../view/event-view.js';
import createFormEditTemplate from '../view/form-edit-view.js';
// import createFormAddTemplate from '../view/form-add-view.js';
export default class MainPresenter {
  constructor(filtersContainer, eventsContainer) {
    this.filtersContainer = filtersContainer;
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new createFilterTemplate(), this.filtersContainer);
    render(new createSortTemplate(), this.eventsContainer);
    render(new createFormEditTemplate(), this.eventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new createEventTemplate(), this.eventsContainer);
    }
  }
}
