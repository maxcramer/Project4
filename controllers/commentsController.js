const Journey = require('../models/journey');

function commentsCreate(req, res) {
  console.log('We made it here oh yeah!');
  Journey
    .findById(req.params.journeyId)
    .then(journey => {
      console.log(journey);
      journey.comments.push(req.body);
      return journey.save();
    })
    .then(journey => res.json(journey)
    )
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Journey
    .findOneById(req.params.journey)
    .then(journey => {
      const commentIdToDelete = req.params.commentId;
      journey.comments = journey.comments.filter(
        comment => comment.id !== commentIdToDelete
      );
      return journey.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
