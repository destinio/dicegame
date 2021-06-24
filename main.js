const diceCount = document.querySelector('#dice-count')
const diceType = document.querySelector('#dice-type')
const submit = document.querySelector('#submit')
const results = document.querySelector('#results')

function die(sides) {
  return Math.floor(Math.random() * sides) + 1
}

function rollDice(e) {
  e.preventDefault()
  results.innerHTML = ''

  const count = diceCount.value
  const type = diceType.value

  if (!count) {
    alert('please enter dice amount')
    diceCount.focus()
    return
  } else if (!type) {
    alert('please enter dice type')
    diceType.focus()
    return
  }

  for (let i = 0; i < count; i += 1) {
    const theRoll = die(type)
    const dieDiv = document.createElement('div')

    dieDiv.classList.add('die')
    dieDiv.textContent = theRoll

    results.appendChild(dieDiv)
  }
}

submit.addEventListener('click', e => {
  rollDice(e)
})

document.body.addEventListener('keypress', e => {
  if (e.code !== 'Enter') return

  rollDice(e)
})
