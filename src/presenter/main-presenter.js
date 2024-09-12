import {render} from '../render.js';

import createFilterTemplate from '../view/filter-view.js';
import createSortTemplate from '../view/sort-view.js';
import EventView from '../view/event-view.js';
import createFormEditTemplate from '../view/form-edit-view.js';
// import createFormAddTemplate from '../view/form-add-view.js';
export default class MainPresenter {
  constructor(filtersContainer, eventsContainer, pointsModel) {
    this.filtersContainer = filtersContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.mainPoints = [...this.pointsModel.getPoints()];
    render(new createFilterTemplate(), this.filtersContainer);
    render(new createSortTemplate(), this.eventsContainer);
    render(new createFormEditTemplate(), this.eventsContainer);

    for (let i = 0; i < this.mainPoints.length; i++) {
      render(new EventView({point: this.mainPoints[i]}), this.eventsContainer);
    }

  }
}
