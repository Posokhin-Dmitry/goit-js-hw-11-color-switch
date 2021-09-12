const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548']

const body = document.querySelector('body')
const btnStart = document.querySelector('button[data-action="start"]')
const btnStop = document.querySelector('button[data-action="stop"]')

btnStart.addEventListener('click', startChangeColor)
btnStop.addEventListener('click', stopChangeColor)

let idInterval = null

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function startChangeColor(params) {
  idInterval = setInterval(() => {
    body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000)
  btnStart.removeEventListener('click', startChangeColor)
}

function stopChangeColor() {
  clearInterval(idInterval)
  btnStart.addEventListener('click', startChangeColor)
}
