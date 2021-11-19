// import '../styles.css';
// import '../sass/main.scss';
import colors from '../colors.json';

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyTheme = document.querySelector('body');
let intervalId = null;

console.log(bodyTheme.backgroundColor);
console.log("colors from import", colors);
console.log(startBtn.attributes);
console.log(stopBtn);


startBtn.addEventListener('click', onClickChangeThemeStart);
stopBtn.addEventListener('click', onClickChangeThemeStop);

function onClickChangeThemeStart() {
  intervalId = setInterval((colorChange), 1000);
  console.log("changing color")
  startBtn.setAttribute('disabled', true);
};

function colorChange() {
  const colorsArrLength = colors.length;
  const selectColor = colors[randomIntegerFromInterval(0, colorsArrLength)];
  bodyTheme.style.backgroundColor = selectColor;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onClickChangeThemeStop() {
  clearInterval(intervalId);
  console.log("stop changing color")
  startBtn.removeAttribute('disabled');
  bodyTheme.style.backgroundColor = "";
};



// const colorsList = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];