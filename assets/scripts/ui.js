'use strict';

const app = require('./app-data.js');
const api = require('./api.js');


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

const deleteSuccess = () => {
  console.log('delete success');
  console.log(app);
};

const updateSuccess = function (){
  console.log('update worked');
};

const displayQuestions = function(questions){
  let questionListingTemplate = require('./templates/question-listing.handlebars');
    $('.contentGet').append(questionListingTemplate({
      questions: questions
    }));
    const deleteQuestions = (deleteSuccess, failure, id) => {
      $.ajax({
        method: 'DELETE',
        url: app.api + '/questions/' + id,
        headers: {
          Authorization: 'Token token=' + app.user.token,
        },
      }).done(deleteSuccess)
      .fail(failure);
    };

    //added deletebutton event handler, taken from ui. because of handlebars
    $('.deleteButton').on('click', function (event) {
      event.preventDefault();
      let buttonid = $(this).data('id');
      deleteQuestions(deleteSuccess, failure, buttonid);
    });
};

const indexSuccess = function (data) {
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
};
