let firstTypePoints = sessionStorage.getItem("firstTypePoints");
let secondTypePoints = sessionStorage.getItem("secondTypePoints");
let thirdTypePoints = sessionStorage.getItem("thirdTypePoints");
let username = sessionStorage.getItem("username");

let pointop = 0;
let mess;
let typo;
//first
if (
  (firstTypePoints > secondTypePoints && firstTypePoints > thirdTypePoints) ||
  firstTypePoints == secondTypePoints
) {
  typo = "Congrats!" + "  " + username;
  mess = [
    "After looking at your answers, we can tell that you look after your teeth very well.",
    " Polardent would be a great to help brighten your teeth....",
    " Here are some tips on how to help you gain healthier teeth...",
  ];
}

//second
if (secondTypePoints > firstTypePoints && secondTypePoints > thirdTypePoints) {
  typo = "Congrats!" + "  " + username;
  mess = [
    "It seems you may need to improve your oral hygiene.",
    " Never fear Polardent is here and we can help brighten up your teeth.",
    " Here are some tips on how to help you gain healthier teeth...",
  ];
}
//third
else if (
  thirdTypePoints > firstTypePoints &&
  thirdTypePoints > secondTypePoints
) {
  typo = "Congrats!" + " " + username;
  mess = [
    "It seems looking at your results that due to wear braces or Invisalign it is best to wait until your treatment is complete before proceeding with Polardent teeth whitening kits to gain the best possible results.",
    "However here are some helpful tips on how to keep up your oral hygiene....",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
document.querySelector(".usertype").value = typo;

document.querySelector(".usertype").style.display = "none";

//formspree

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  //var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: block ";
    status.classList.add("success");
    status.innerHTML = "Submitted Successfully!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of intagrammer I am ");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
