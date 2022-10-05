function RNIR(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let root = document.querySelector(".root");
let input = document.querySelector(".answer-input");
let output = document.querySelector(".output");
let button = document.querySelector(".submit");
let nextBtn = document.querySelector(".next");
let minRange = document.querySelector(".rng-min");
let maxRange = document.querySelector(".rng-max");
let streakBar = document.querySelector(".streak");
let min = 1;
let max = 99;
let answer = RNIR(min, max);
let question = answer**2;
let streak = 0;
streakBar.textContent = "Streak: " + streak;


root.textContent = "√" + question;
minRange.addEventListener("keyup", update);
maxRange.addEventListener("keyup", update);
minRange.addEventListener("click", update);
maxRange.addEventListener("click", update);

function submit() {
    if(input.value === answer.toString()) {
        output.textContent = "Thats correct!! Awesome :)";
        output.style.color = "green";
        input.style.backgroundColor = "green";
        streak += 1;
        streakBar.textContent = "Streak: " + streak;
        setTimeout(()=> {
            input.style.backgroundColor = "rgba(50, 50, 50, 0.672)";
            input.value = "";
        }, "300")
    } else {
        output.textContent = "The answer is not correct! the correct answer is: " + answer;
        output.style.color = "red";
        input.style.backgroundColor = "red";
        streak = 0;
        streakBar.textContent = "Streak: " + streak;
        setTimeout(()=> {
            input.style.backgroundColor = "rgba(50, 50, 50, 0.672)";
            input.value = "";
        }, "300")
    }
    nextBtn.style.display = "initial";
    button.style.display = "none";
}

function next() {
    answer = RNIR(min, max);
    question = answer**2;
    root.textContent = "√" + question;
    output.textContent = "";
    button.style.display = "initial";
    nextBtn.style.display = "none";
}
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (button.style.display !== "none") {
            button.click();
        } else {
            nextBtn.click();
        }
    }
  });
  function update() {
    min = parseInt(minRange.value);
    max = parseInt(maxRange.value);
    answer = RNIR(min, max);
    question = answer**2;
    root.textContent = "√" + question;
    streak = 0;
    streakBar.textContent = "Streak: " + streak;
  }
