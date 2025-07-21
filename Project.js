const textElement = document.getElementById("cursor-text");
const textArray = [
  " Gaming: where skill meets thrill. Are you ready to level up",
  " Discover worlds beyond imagination. Your next great adventure awaits.",
  " Join millions of players worldwide. Choose your game, make history.",
  " Experience the power of play. Gaming redefined, just for you.",
  " Unleash your inner champion. Every battle is a chance to rise.",
]; // array of texts to cycle through
let currentIndex = 0;
let currentText = "";
let cursorPosition = 0;
let isTyping = true; // Flag to determine typing or deleting state

function updateText() {
  if (isTyping) {
    // Typing
    currentText = textArray[currentIndex].slice(0, cursorPosition + 1);
    textElement.textContent = currentText;
    cursorPosition++;

    if (cursorPosition === textArray[currentIndex].length) {
      isTyping = false;
      setTimeout(updateText, 1500); // Pause before deleting
    } else {
      setTimeout(updateText, 100); // Typing speed
    }
  } else {
    // Deleting
    currentText = textArray[currentIndex].slice(0, cursorPosition);
    textElement.textContent = currentText;
    cursorPosition--;

    if (cursorPosition === 0) {
      isTyping = true;
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(updateText, 1500); // Pause before typing next text
    } else {
      setTimeout(updateText, 50); // Deleting speed
    }
  }
}

updateText(); // Initial call to start the text animati
