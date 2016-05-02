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

// const updateSuccess = function (){
//   console.log('update worked');
// };
//

const displayQuestions = function(questions){
  let questionListingTemplate = require('./templates/question-listing.handlebars');
    $('.contentget').append(questionListingTemplate({
      questions: questions
    }));
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
  // updateSuccess,
  indexSuccess,
  deleteSuccess,
  displayQuestions,
};
