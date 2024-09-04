import {render} from './render.js';
import MainPresenter from './presenter/main-presenter.js';
const siteMainElement = document.querySelector('.page-main');
const siteSortElement = siteMainElement.querySelector('.page-body__container');
const mainPresenter = new MainPresenter();

import createFilterTemplate from './view/filter-view.js';
import createSortTemplate from './view/sort-view.js';

render (new createFilterTemplate(), siteSortElement);
render (new createSortTemplate(), siteSortElement);

mainPresenter.init();
