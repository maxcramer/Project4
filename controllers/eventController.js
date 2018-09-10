const Event = require('../models/event');



function eventsIndex(req, res, next) {
  Event.find()
    .then(events => res.json(events))
    .catch(next);
}

function eventsUpdate(req, res, next) {
  Event.findById(req.params.id)
    .then(event => event.set(req.body))
    .then(event => event.save())
    .then(event => res.json(event))
    .catch(next);
}

function eventsShow(req, res, next) {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(next);
}

function eventsCreate(req, res, next) {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
}

function eventsDelete(req, res, next) {
  Event.findById(req.params.id)
    .then(event => event.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  create: eventsCreate,
  update: eventsUpdate,
  show: eventsShow,
  delete: eventsDelete
};
