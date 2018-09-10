/* global */

const express = require('express');
const Router = express.Router();


const journeysController = require('../controllers/journeysController');
const authController = require('../controllers/authController');
const commentsController = require('../controllers/commentsController');
const tagsController = require('../controllers/tagsController');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
// const secureRoutes = require('../lib/secureRoutes');



Router.route('/')
  .get(function(req, res) {
    res.send('Welcome to Express');
  });

// LOGIN & REGISTER
Router.route('/login')
  .post(authController.login);
Router.route('/register')
  .post(authController.register);

// JOURNEYS
Router.route('/journeys')
  .get(journeysController.index)
  .post(journeysController.create);
Router.route('/journeys/:id')
  .get(journeysController.show)
  .put(journeysController.update)
  .delete(journeysController.delete);

// User Journeys
Router.route('/users/:userId/journeys')
  .get(journeysController.indexByUser);
Router.route('/users/:userId/journeys/:journeyId')
  .delete(journeysController.indexByUserDelete);

// USER CONTROL (FOLLOWING FUNCTIONS)
Router.route('/users')
  .get(userController.index);
Router.route('/users/:id')
  .get(userController.show)
  .put(userController.addFollower)
  .delete(userController.delete);

// TAGS
Router.route('/users/:userId/tags')
  .post(tagsController.create);
Router.route('/users/:userId/tags/:tagId')
  .delete(tagsController.delete);

// COMMENTS
Router.route('/journeys/:journeyId/comments')
  .post(commentsController.create);
Router.route('/journeys/:journeyId/comments/:commentId')
  .delete(commentsController.delete);

// EVENTS
Router.route('/events')
  .get(eventController.index)
  .post(eventController.create);
Router.route('/events/:id')
  .get(eventController.show)
  .put(eventController.update)
  .delete(eventController.delete);

module.exports = Router;
