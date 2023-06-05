function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function startChangingColor() {
  document.getElementById('startBtn').disabled = true;
  document.getElementById('stopBtn').disabled = false;

  intervalId = setInterval(() => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
  }, 1000);
}

function stopChangingColor() {
  document.getElementById('startBtn').disabled = false;
  document.getElementById('stopBtn').disabled = true;

  clearInterval(intervalId);
}

document
  .getElementById('startBtn')
  .addEventListener('click', startChangingColor);
document.getElementById('stopBtn').addEventListener('click', stopChangingColor);
// document
//   .getElementById('startBtn')
//   .addEventListener('click', startChangingColor);
// document.getElementById('stopBtn').addEventListener('click', stopChangingColor);
