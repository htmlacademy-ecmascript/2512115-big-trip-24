import {getRandomArrayElement} from '../utils.js';
import {POINT_TYPE} from '../const.js';

const pointsMock = [
  {
    'id': '5aa826e2-6498-49c6-9bad-4072b2529482',
    'base_price': 445,
    'date_from': '2024-10-29T02:44:08.838Z',
    'date_to': '2024-10-29T15:37:08.838Z',
    'destination': 'ed9484cf-0c3f-40c1-bfaf-76ccef24d4e2',
    'is_favorite': false,
    'offers': [
      '7901d669-8d1b-4e8b-ab56-db5395b42579'
    ],
    'type': getRandomArrayElement(POINT_TYPE)
  },
  {
    'id': '499b8afa-a9bc-4017-a9c1-5e6dcc3d51dc',
    'base_price': 5177,
    'date_from': '2024-10-31T04:42:08.838Z',
    'date_to': '2024-10-31T23:14:08.838Z',
    'destination': '9e6c78f4-a36a-48a7-9265-b767a487053f',
    'is_favorite': false,
    'offers': [
      '611848d3-1452-4c6a-a84b-2f17143de098',
      '5149556f-747c-4cb2-b970-03e87f538bbd'
    ],
    'type': getRandomArrayElement(POINT_TYPE)
  },
  {
    'id': 'a03eaa93-b2ce-45d7-8264-022db15d1e38',
    'base_price': 7318,
    'date_from': '2024-11-02T15:09:08.838Z',
    'date_to': '2024-11-03T01:12:08.838Z',
    'destination': '5366ee4d-e71a-4515-b916-df96f12090c2',
    'is_favorite': true,
    'offers': [],
    'type': getRandomArrayElement(POINT_TYPE)
  },
  {
    'id': '4c3f45dc-833f-40b0-9209-2f79b9340304',
    'base_price': 7333,
    'date_from': '2024-11-04T13:13:08.838Z',
    'date_to': '2024-11-05T07:43:08.838Z',
    'destination': '134d7320-593d-40a6-b2e7-2431a8289aa0',
    'is_favorite': true,
    'offers': [],
    'type': getRandomArrayElement(POINT_TYPE)
  },
  {
    'id': '4a510575-0b90-499a-8ece-9e4af143c838',
    'base_price': 8921,
    'date_from': '2024-11-06T02:53:08.838Z',
    'date_to': '2024-11-06T22:45:08.838Z',
    'destination': '022e5389-a4b5-4a0a-8297-d7f3f5b6eba1',
    'is_favorite': false,
    'offers': [
      'ffd68078-f24a-47ec-b7a7-7bb560938d53',
      '98418a2e-d748-40bc-87a8-10177e0cc56d',
      '5172fb09-28d4-4c24-8522-bb190afe8f2c',
      '82a0f5d6-4e5a-4cb1-b9bd-7e66fff7969e',
      'db8ffbb6-f9e4-40e1-87d7-3820fa34853d',
      'e13e5fda-ccd4-4edf-bb39-c83cc12b57be'
    ],
    'type': getRandomArrayElement(POINT_TYPE)
  },
  {
    'id': '9a8d0fb7-92b9-4877-a8ef-47d0f52e3fa3',
    'base_price': 277,
    'date_from': '2024-11-08T17:33:08.838Z',
    'date_to': '2024-11-10T14:46:08.838Z',
    'destination': '9e6c78f4-a36a-48a7-9265-b767a487053f',
    'is_favorite': false,
    'offers': [],
    'type': getRandomArrayElement(POINT_TYPE)
  },
];

function getRandomPoint() {
  return getRandomArrayElement(pointsMock);
}

export {getRandomPoint};
