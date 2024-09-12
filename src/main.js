import MainPresenter from './presenter/main-presenter.js';
import PointsModel from './models/points-model.js';
import DestinationsModel from './models/destination-model.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();

const presenter = new MainPresenter(filtersContainer, eventsContainer, pointsModel, destinationsModel);
presenter.init();
