const Journey = require('../models/journey');


function commentsCreate(req, res) {
  Journey
    .findById(req.params.journeyId)
    .then(journey => {
      journey.comments.push(req.body);
      return journey.save();
    })
    .then(journey => res.redirect(`/journeys/${journey.id}`))
    .catch(err => console.log(err));
}

function commentsDelete(req, res, next) {
  Journey
    .findById(req.params.journeyId)
    .then(journey => {
      const commentIdToDelete = req.params.commentId;
      // TODO: This should check that the user is the commenting user
      journey.comments = journey.comments.filter(
        comment => comment.id !== commentIdToDelete
      );
      return journey.save();
    })
    .then(journey => res.redirect(`/journeys/${journey.id}`))
    .catch(next);
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
