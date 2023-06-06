function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

let intervalId;

function startChangingColor() {
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[data-stop]').disabled = false;

  intervalId = setInterval(() => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
  }, 1000);
}

function stopChangingColor() {
  document.querySelector('[data-start]').disabled = false;
  document.querySelector('[data-stop]').disabled = true;

  clearInterval(intervalId);
}

document
  .querySelector('[data-start]')
  .addEventListener('click', startChangingColor);
document
  .querySelector('[data-stop]')
  .addEventListener('click', stopChangingColor);
