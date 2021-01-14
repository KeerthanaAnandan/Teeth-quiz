function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  sessionStorage.setItem("points", points);

  location.href = "quiz.html";
}

let points = 0;
function onepoint() {
  points += -90;
}
function twopoint() {
  points += -30;
}
function threepoint() {
  points += 12;
}
function fourpoint() {
  points += 30;
}
function fivepoint() {
  points += 48;
}
function sixpoint() {
  points += 40;
}
function sevenpoint() {
  points += 15;
}
function eightpoint() {
  points += 9;
}

sessionStorage.setItem("points", points);
