import {getRandomArrayElement} from '../utils.js';
import {DESTINATION_NAME} from '../const.js';

const destinationsMock = [
  {
    'id': '5e16e2c1-766a-4cc8-bc0a-544463a45051',
    'description': 'Munich - a true asian pearl',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Munich a true asian pearl'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Munich full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': 'c273cade-582a-43f3-b22c-9772f055ecd8',
    'description': 'Frankfurt - a perfect place to stay with a family',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Frankfurt with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Frankfurt in a middle of Europe'
      }
    ]
  },
  {
    'id': 'ae04f444-9c4f-4528-ba54-f9b1e3caa1e0',
    'description': 'Rotterdam - middle-eastern paradise',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': []
  },
  {
    'id': '134d7320-593d-40a6-b2e7-2431a8289aa0',
    'description': 'Helsinki - with a beautiful old town',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Helsinki with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/8.jpg',
        'description': 'Helsinki for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Helsinki in a middle of Europe'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Helsinki middle-eastern paradise'
      }
    ]
  },
  {
    'id': '40145804-0130-4416-a4ee-167a3d6ede70',
    'description': 'Barcelona - a true asian pearl',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': []
  },
  {
    'id': '5366ee4d-e71a-4515-b916-df96f12090c2',
    'description': 'Tokio - with an embankment of a mighty river as a centre of attraction',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Tokio with a beautiful old town'
      }
    ]
  },
  {
    'id': '022e5389-a4b5-4a0a-8297-d7f3f5b6eba1',
    'description': '',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': []
  },
  {
    'id': 'e2593de1-ffa5-4b60-bbcf-1a2faca7a3d8',
    'description': 'Kioto - is a beautiful city',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Kioto famous for its crowded street markets with the best street food in Asia'
      }
    ]
  },
  {
    'id': '9e6c78f4-a36a-48a7-9265-b767a487053f',
    'description': 'Monaco - with an embankment of a mighty river as a centre of attraction',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Monaco full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': 'ed9484cf-0c3f-40c1-bfaf-76ccef24d4e2',
    'description': 'Nagasaki - middle-eastern paradise',
    'name': getRandomArrayElement(DESTINATION_NAME),
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Nagasaki with a beautiful old town'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Nagasaki with a beautiful old town'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Nagasaki full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Nagasaki with a beautiful old town'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Nagasaki famous for its crowded street markets with the best street food in Asia'
      }
    ]
  }
];

function getDestination() {
  return getRandomArrayElement(destinationsMock);
}

export {getDestination};
