let username = document.getElementById("namebox").innerHTML;
console.log(username);

//document.getElementById('namebox').style.display="none";
//sessionStorage.setItem("username", username);
function inputhandler(e) {
  e.preventDefault();
  let blaa = e.target.value;
  console.log(blaa);
  //localStorage.setItem("username", blaa);
  sessionStorage.setItem("username", blaa);
}

function submitForm(e) {
  e.preventDefault();

  //sessionStorage.setItem("points", points);

  //localStorage.setItem("urname", blaa);
  //console.log(username);

  location.href = "quiz.html";
}
