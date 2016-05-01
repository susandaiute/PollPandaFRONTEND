'use strict';


////////////  Check Answers /////////////

let answer;

const checkAnswerOne = function () {
  answer = $("input[name=worms]:checked");
  console.log('this is answer' + answer);
  return answer;
};

const checkAnswerTwo = function () {
  answer = $("input[name=ketchup]:checked").id;
  return answer;
};

const checkAnswerThree = function () {
  answer = $("input[name=letters]:checked").id;
  return answer;
};

////////////// Compile Answers /////////////

let answerOneArr1 = [];
let answerOneArr2 = [];
let answerOneArr3 = [];
let answerTwoArr1 = [];
let answerTwoArr2 = [];
let answerTwoArr3 = [];
let answerThreeArr1 = [];
let answerThreeArr2 = [];
let answerThreeArr3 = [];

///////////////// Display Answers ///////////////

const displayResultsOne = function () {
  return "Absolutely!"+ answerOneArr1.length + "Wtf? No." + answerOneArr2.length + "I might need to Google this..." + answerOneArr3.length;
};

const displayResultsTwo = function () {
  return "Most definitely"+ answerTwoArr1.length + "No" + answerTwoArr2.length + "Illuminati" + answerTwoArr3.length;
};

const displayResultsThree = function () {
  return "Without a doubt, yes"+ answerThreeArr1.length + "Under no circumstances, no" + answerThreeArr2.length + "They die in gang wars before they ever get to grow up" + answerThreeArr3.length;
};


module.exports = {
  checkAnswerOne,
  checkAnswerTwo,
  checkAnswerThree,
  displayResultsThree,
  displayResultsTwo,
  displayResultsOne,
};
