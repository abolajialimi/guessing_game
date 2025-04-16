let score = 10;
let historyHighscore = 0;
const scoreDisplay = document.querySelector('.scoreDisplay')
const HistoryHigh  = document.querySelector('.HistoryHigh')
const input  = document.querySelector('.input')
const btn  = document.querySelector('.check')
const msg  = document.querySelector('.msg')
const resetBtn = document.querySelector('.resetBtn');
const reactionImg = document.querySelector('.reactionImg');
const imageOptions = [
  'Images/pic1.png',
  'Images/pic2.png',
  'Images/pic3.png',
  'Images/pic4.png',
  'Images/pic5.png'
];
console.log(msg.textContent); // Outputs: This is a message.


let randomValue = Math.floor(Math.random() * 100) + 1;
console.log(randomValue)
function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}


btn.addEventListener('click', function(){
    const userInput = input.value.trim();
    const value = Number(input.value);
    // Show a new random face on each guess
  const randomImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
  reactionImg.src = randomImage;
    
    if (!userInput || isNaN(value) || value < 1 || value > 100) {
        msg.textContent = '⚠️ Enter a number between 1 and 100 ONLY';
        return;
    }
    if (score <= 0) {
        msg.textContent = '💀 Game Over! Click reset to try again.';
        return;
    }


    if (value === randomValue) {
        msg.textContent = `🎉 Success! You guessed the number: ${randomValue} with score: ${score}`;
        input.disabled = true;
        btn.disabled = true;
        reactionImg.src = 'Images/win.png';  // Show win picture
        return;
    }

    score--;
    updateScoreDisplay();

    if (score === 0) {
        msg.textContent = '💀 Game Over! You ran out of attempts.';
        input.disabled = true;
        btn.disabled = true;
        reactionImg.src = 'Images/lose.png';  // Show lose picture
    } else if (value < randomValue) {
        msg.textContent = `⬆️ Too low! Try a higher number. Score: ${score}`;
    } else {
        msg.textContent = `⬇️ Too high! Try a lower number. Score: ${score}`;
    }
});

resetBtn.addEventListener('click', function () {
    randomValue = Math.floor(Math.random() * 100) + 1;
    score = 10;
    updateScoreDisplay();
    msg.textContent = '🔄 Game reset! Enter a new number between 1 and 100.';
    input.value = '';
    input.disabled = false;
    btn.disabled = false;

    reactionImg.src = imageOptions[Math.floor(Math.random() * imageOptions.length)];
});