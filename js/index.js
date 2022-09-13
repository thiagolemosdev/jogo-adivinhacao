const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() *10)
let xAttemps = 0

const btnTry = document.querySelector('#btnTry')
const btnAgain = document.querySelector('#btnAgain')

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)

function handleTryClick (event) {
  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber")

  xAttemps++

  if(Number(inputNumber.value) === randomNumber) {
    toggleScreen()
    document.querySelector(".acertou").innerHTML = `Acertou em ${xAttemps} tentativas`
     
  }

  inputNumber.value = ""
}

function handleResetClick () {
  toggleScreen()

  xAttemps = 0 
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
