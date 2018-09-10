const Journey = require('../models/journey');

function journeysIndex(req, res, next) {
  Journey.find()
    .then(journeys => res.json(journeys))
    .catch(next);
}

function indexByUser(req, res, next){
  Journey.find({user: req.params.userId})
    .then(journeys => res.json(journeys))
    .catch(next);
}

function indexByUserDelete(req, res, next) {
  console.log(req.params.userId, req.params.journeyId);
  Journey.findById(req.params.journeyId)
    .then(journey => journey.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

function journeysShow(req, res, next) {
  console.log('This is what comes through', req.params.id);
  Journey.findById(req.params.id)
    .then(journey => res.json(journey))
    .catch(next);
}

function journeysUpdate(req, res, next) {
  Journey.findById(req.params.id)
    .then(journey => journey.set(req.body))
    .then(journey => journey.save())
    .then(journey => res.json(journey))
    .catch(next);
}

function journeysCreate(req, res, next) {
  Journey.create(req.body)
    .then(journey => res.json(journey))
    .catch(next);
}

function journeysDelete(req, res, next) {
  Journey.findById(req.params.id)
    .then(journey => journey.remove())
    .then(() => res.sendStatus(204)) // no content
    .catch(next);
}

module.exports = {
  index: journeysIndex,
  show: journeysShow,
  update: journeysUpdate,
  create: journeysCreate,
  delete: journeysDelete,
  indexByUser: indexByUser,
  indexByUserDelete: indexByUserDelete
};
