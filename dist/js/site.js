let questions = [
  {
    id: 1,
    question: "How many times do you brush your teeth in a day?",
    answer: "2",
    options: [" None", "1", "2", "3+"],
  },
  {
    id: 2,
    question: "Do you have regular checks up with your dentist?",
    answer: "2",
    options: ["Yes", " No"],
  },
  {
    id: 3,
    question: "Do you have braces or Invisalign?",
    answer: "2",
    options: ["No", "Braces", "Invisalign", "Both"],
  },
  {
    id: 4,
    question: "How many times do you floss in a day?",
    answer: "2",
    options: [" None", "One", "Two", "Three +"],
  },
  {
    id: 5,
    question: "How often do you smoke in a day?",
    answer: "2",
    options: ["None", "1-2", "3-4", "5+ "],
  },
  {
    id: 6,
    question: "How many units of alcohol do you drink a week?",
    answer: "2",
    options: ["None", "1-3", "4-6", "7+"],
  },
  {
    id: 7,
    question: "How often do you drink fizzy drinks?",
    answer: "2",
    options: ["Not at all", "On special occasions", "Everyday"],
  },
  {
    id: 8,
    question: "How many liters of water do you drink in a day?",
    answer: "2",
    options: ["Less than 1 litre", "1-2", "3-4", "5+"],
  },
  {
    id: 9,
    question: "Have you looked into teeth whitening before?",
    answer: "2",
    options: ["Yes", "No"],
  },
  {
    id: 10,
    question: "Have you tried other teeth whitening product?",
    answer: "2",
    options: ["Yes", "No"],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;
let firstTypePoints = 0;
let secondTypePoints = 0;
let thirdTypePoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "form.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /////////////////////////first type
  if (
    user_answer === "2" ||
    user_answer === "3+" ||
    user_answer === "Yes" ||
    user_answer === "None" ||
    user_answer === "Two" ||
    user_answer === "Three +" ||
    user_answer === "1-3" ||
    user_answer === "Not at all" ||
    user_answer === "On special occasions" ||
    user_answer === "3-4" ||
    user_answer === "5+" ||
    user_answer === "No"
  ) {
    firstTypePoints += 1;
  }
  /////////////////second type
  else if (
    user_answer === "Braces" ||
    user_answer === "Invisalign" ||
    user_answer === "Both"
  ) {
    thirdTypePoints += 9;
  }
  ///////////////////second type
  else if (
    user_answer === " None" ||
    user_answer === "3-4" ||
    user_answer === "5+ " ||
    user_answer === "7+" ||
    user_answer === "Everyday" ||
    user_answer === "Less than 1 litre" ||
    user_answer === "One" ||
    user_answer === "1-2" ||
    user_answer === "4-6" ||
    user_answer === "1-2" ||
    user_answer === "1" ||
    user_answer === " No"
  ) {
    secondTypePoints += 1;
  } //////////////////the influencer

  sessionStorage.setItem("firstTypePoints", firstTypePoints);
  sessionStorage.setItem("secondTypePoints", secondTypePoints);
  sessionStorage.setItem("thirdTypePoints", thirdTypePoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  ///////no of questions
  if (question_count == 1 || question_count == 8 || question_count == 9) {
    question.innerHTML = `
    <h2> ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    

  </ul> 
    `;
    toggleActive();
  } else if (question_count == 6) {
    question.innerHTML = `
    <h2> ${questions[count].question}</h2>
     <ul class="option_group">
    <li><span class="option">${first}</span></li>
    <li ><span class="option">${second}</span></li>
    <li ><span class="option">${third}</span></li>
    

  </ul> 
    `;
    toggleActive();
  } else {
    question.innerHTML = `
  <h2> ${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
</ul> 
  `;
    toggleActive();
  }
}
function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
