'use strict';

const app = require('./app-data.js');
const api = require('./api.js');
const getFormFields = require('../../lib/get-form-fields');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('.navbar-left').show();
  $('#signIn').modal('hide');
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $('.navbar-left').hide();
  $('.modal-backdrop.in').hide();
};

const deleteSuccess = () => {
  console.log(app);
  $('.statusArea').append('Delete was successful');
};

const updateSuccess = function() {
  $('.updateStatusArea').html('');
  $('.updateStatusArea').append('Update was successful');
};

const displayQuestions = function(questions) {
  let questionListingTemplate = require('./templates/question-listing.handlebars');
  $('.contentGet').html('');
  $('.contentGet').append(questionListingTemplate({
    questions: questions
  }));
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

  const updateQuestion = (updateSuccess, failure, buttonid, data) => {
    console.log(data);
    $.ajax({
        method: 'PATCH',
        url: app.api + '/questions/' + buttonid,
        data: {
          "question": {
            "title": data.question.title,
            "answer1": data.question.answer1,
            "answer2": data.question.answer2,
            "answer3": data.question.answer3
          }
        },
        headers: {
          Authorization: 'Token token=' + app.user.token,
        },
      }).done(updateSuccess)
      .fail(failure);
  };



  //added deletebutton event handler, taken from ui, because of handlebars
  $('.container-fluid').on('click', '.deleteButton', function(event) {
    event.preventDefault();
    let buttonid = $(this).data('id');
    deleteQuestion(deleteSuccess, failure, buttonid);
  });

  let updateQuestionId;

$('.container-fluid').on('click', '.updateButton', function(event) {
  updateQuestionId = $(this).data('id');
});

  $('#updateForm').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    updateQuestion(updateSuccess, failure, updateQuestionId, data);
    $('#updateQuestionMod').modal('hide');
  });




const indexSuccess = function(data) {
  console.log(data);
  displayQuestions(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  updateSuccess,
  indexSuccess,
  deleteSuccess,
  displayQuestions,
  // updateQuestion,
};
