'use strict';

const app = require('./app-data.js');
const api = require('./api.js');

// const createSuccess = function (data) {
//   app.game = data.game;
//   console.log(app);
// };

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

// const updateSuccess = function (){
//   console.log('update worked');
// };
//
const indexSuccess = function (data) {
  console.log(data);
  $(".getModalBody").append("<p>You Have Submitted: " + data.questions + "</p>");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  // updateSuccess,
  indexSuccess,
  // createSuccess,
};
