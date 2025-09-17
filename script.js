const button = document.getElementById("moodBtn");
let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    button.textContent = "What's good?";
    button.style.backgroundColor = "yellow";
  } else if (clickCount === 2) {
    button.textContent = "Leave me alone...";
    button.style.backgroundColor = "lightblue";
  } else if (clickCount === 3) {
    button.textContent = "Get out!";
    button.style.backgroundColor = "tomato";
  } else {
    button.textContent = "Click me again!";
    button.style.backgroundColor = "#ddd";
    clickCount = 0;
  }
});
