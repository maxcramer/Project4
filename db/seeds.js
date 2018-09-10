const mongoose = require('mongoose');
const Journey = require('../models/journey');
const User = require('../models/user');
const Event = require('../models/event');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);

const journeyData = [
  {
    journeyName: 'Speeding Through Shorditch',
    city: 'London',
    positions: [
      {lat: 51.522006, lon: -0.071704, time: 1300},
      {lat: 51.522007, lon: -0.071705, time: 1300},
      {lat: 51.522008, lon: -0.071706, time: 1300},
      {lat: 51.522009, lon: -0.071707, time: 1300}
    ],
    username: 'Max',
    description: 'Trip down brick lane with some awesome bumps to jump!',
    distance: 0.6,
    boardRode: 'Onewheel Plus',
    journeyImage: 'https://i.imgur.com/6zE4bvy.jpg',
    comments: [
      {username: 'Max', content: 'This is the best ride ever!'}
    ]
  }
];

const eventData = [
  {
    eventName: 'Aldgate Ride',
    startTime: 1700,
    endTime: 1900,
    startLocation: {lat: 51.522006, lon: -0.071704 },
    endLocation: {lat: 51.522009, lon: -0.071707},
    organiser: 'Max',
    eventImage: 'https://i.imgur.com/6zE4bvy.jpg'
  }
];

const userData = [
  {
    email: 'max@email.com',
    userame: 'max',
    password: 'pass',
    profileImg: 'https://media.licdn.com/dms/image/C4D03AQFvQx1ZhFlX7Q/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=WmMvV5beHl5LGZCe1mLdyPrn0ZVKmccfrauRl_Olz7A',
    boardType: 'OneWheel XR',
    boardImg: 'http://cdn.shopify.com/s/files/1/0696/2011/products/Onewheel_ThreeQuarters_e_67962218-4b6e-48b4-b99c-c9987924d3fa_grande.jpg?v=1483500980',
    ridingStyle: 'Street',
    boardMods: [
      {
        tagname: 'Speaker'
      }
    ]
  },
  {
    email: 'sandy@email.com',
    username: 'Sandy',
    password: 'pass',
    profileImg: 'https://media.licdn.com/dms/image/C4D03AQFvQx1ZhFlX7Q/profile-displayphoto-shrink_200_200/0?e=1541635200&v=beta&t=WmMvV5beHl5LGZCe1mLdyPrn0ZVKmccfrauRl_Olz7A',
    boardType: 'OneWheel XR',
    boardImg: 'http://cdn.shopify.com/s/files/1/0696/2011/products/Onewheel_ThreeQuarters_e_67962218-4b6e-48b4-b99c-c9987924d3fa_grande.jpg?v=1483500980',
    ridingStyle: 'Street',
    boardMods: [
      {
        tagname: 'Speaker'
      }
    ]
  }
];

Journey.collection.drop();
Event.collection.drop();
User.collection.drop();
Event.create(eventData);
Journey.create(journeyData);
User.create(userData)
  .then(users => {
    journeyData[0].user = users[0]._id;
    return Journey.create(journeyData);
  })
  .then(users => console.log(`${users.length} users created`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
