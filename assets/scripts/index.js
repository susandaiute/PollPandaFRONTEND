'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


const getFormFields = require('../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');
const answer = require('./pollwork');
const displayQuestions = require('./ui');

////////////////   Begin User Events   ///////////////

$('#registerForm').on('submit', function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data);
  authApi.signUp(authUi.success, authUi.failure, data);
});

$('#signInForm').on('submit', function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  authApi.signIn(authUi.signInSuccess, authUi.failure, data);
});

$('#signOut').on('click', function (event) {
  event.preventDefault();
  authApi.signOut(authUi.signOutSuccess, authUi.failure);
});

$('#updatePasswordForm').on('submit', function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  authApi.updatePassword(authUi.updateSuccess, authUi.failure, data);
});

//////////////   Begin Poll Events  ////////////////

$('#panelA').on('submit', function (event) {
  event.preventDefault();
  let data = answer.id;
  console.log(data);
  authApi.answerPoll(authUi.success, authUi.failure, data);
});

$('#submitQuestionForm').on('submit', function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  authApi.submitQuestion(authUi.success, authUi.failure, data);
});

$('#getQuestionsLink').on('click', function (event) {
  event.preventDefault();
  authApi.index(authUi.indexSuccess, authUi.failure);
});

$('#deleteButton').on('click', function (event) {
  event.preventDefault();
  authApi.index(authUi.deleteSuccess, authUi.failure);
});
