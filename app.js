
function showName() {
  name = document.querySelector("#nameInput").value;
  document.querySelector("#result").textContent = name;
}

function changeBackground() {
   container = document.querySelector("#container");
  container.style.backgroundColor = "lightblue";
}

function makeRed() {
   heading = document.querySelector("#mainTitle");
  heading.style.color = "red";
}

function displayNumber() {
   number = document.querySelector("#num1").value;
  document.querySelector("#output").textContent = number;
}

const button = document.querySelector(".submit-btn");
button.addEventListener("click", function () {
  console.log("Button Clicked");
});

function addValues() {
  const num1 = Number(document.querySelector("#first").value);
  const num2 = Number(document.querySelector("#second").value);
  const total = num1 + num2;
  document.querySelector("#sum").textContent = total;
}

function updateText() {
  const para = document.querySelector(".description");
  para.textContent = "Updated successfully";
}

function styleBox() {
  const box = document.querySelector("#box");
  box.style.width = "200px";
  box.style.backgroundColor = "green";
}

function logEmail() {
  const emailValue = document.querySelector("#email").value;
  console.log("Entered email:", emailValue);
}

function updateFontSize() {
  const para = document.querySelector("#myPara");
  para.style.fontSize = "24px";
}

function showGreeting() {
  const name = document.querySelector("#fullName").value;
  document.querySelector("#greeting").textContent = "Hello, " + name;
}

function changeImage() {
  const image = document.querySelector("#profilePic");
  image.src = "https://via.placeholder.com/200x200?text=New+Image";
}


function showSelected() {
  const dropdown = document.querySelector("#options");
  const selected = dropdown.value;
  document.querySelector("#selectedValue").textContent = selected;
}

function showDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.querySelector("#dateTime").textContent = formatted;
}

function hideParagraph() {
  const para = document.querySelector("#togglePara");
  para.style.display = "none";
}

function checkEligibility() {
  const ageValue = document.querySelector("#age").value;
  const age = Number(ageValue);
  const statusSpan = document.querySelector("#status");

  if (age >= 18) {
    statusSpan.textContent = "Eligible";
  } else {
    statusSpan.textContent = "Not Eligible";
  }
}

function clearInput() {
  const input = document.querySelector("#searchBox");
  input.value = "";
}


































































