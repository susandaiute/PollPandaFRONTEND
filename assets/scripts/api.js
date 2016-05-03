'use strict';

const app = require('./app-data');
const indexSuccess = require('./ui.js');
const displayQuestions = require('./templates/question-listing.handlebars');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    data,
  }).done(success)
  .fail(failure);
  console.log(data);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const updatePassword = (updateSuccess, failure, data) => {
console.log(app);
let form = {
  "passwords": {
    "old": data.credentials.oldpassword,
    "new": data.credentials.newpassword
  }
};
$.ajax({
  method : 'PATCH',
  url: app.api + '/change-password/' + app.user.id,
  data: form,
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
}).done(updateSuccess)
.fail(failure);
};

//////////////   Poll //////////////////

const answerPoll = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/answers',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const submitQuestion = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/questions',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const index = (indexSuccess, fail) => {
  $.ajax({
      method:'GET',
      url: app.api + '/questions',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }
  })
  .done(indexSuccess)
  .fail(fail);
};

const deleteQuestion = (deleteSuccess, failure, id) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/questions/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(deleteSuccess)
  .fail(failure);
};


module.exports = {
  signUp,
  signIn,
  signOut,
  updatePassword,
  answerPoll,
  submitQuestion,
  index,
  deleteQuestion,
  updateQuestion,
};
