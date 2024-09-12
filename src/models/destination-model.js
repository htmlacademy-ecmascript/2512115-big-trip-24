import {getDestination} from '../mocks/destinations-mock.js';

export default class DestinationsModel {
  destinations = getDestination;

  getDestinations() {
    return this.destinations;
  }
}
