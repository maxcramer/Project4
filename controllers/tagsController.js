const User = require('../models/user');

function tagsCreate(req, res, next) {
  User.findById(req.params.userId)
    .then(user => {
      console.log('This is the User', user);
      user.boardMods.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function tagsDelete(req, res, next) {
  User.findById(req.params.userId)
    .then(user => {
      user.boardMods.id(req.params.tagId).remove();
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  create: tagsCreate,
  delete: tagsDelete
};
