const User = require('../models/user');

function userFollower(req, res, next) {
  User.findById(req.params.userId)
    .then(user => {
      console.log(user);
      user.followers.push(req.currentUser._id);
      return user.save();
    })
    .then(user => {
      User
        .findById(req.currentUser._id)
        .then( user => {
          user.following.push(req.params.userId);
          return user.save();
        });
      return user;
    })
    .then(user => res.json(user))
    .catch(next);
}


function userIndex(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function userShow(req, res, next) {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function userDelete(req, res, next) {
  User.findById(req.params.userId)
    .then(user => user.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: userIndex,
  show: userShow,
  addFollower: userFollower,
  delete: userDelete
};