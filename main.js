// import files
import './style.css'
// import API
import API from './api.js'
import Character from './character.js'
// API
const api = new API()

let currentCharacter = Math.ceil(Math.random()*10)
const arrowLoadNextElement = document.getElementById("load-next")

// validate
if (!arrowLoadNextElement) alert('element with id"load-next"does not exist')

const nextCharacter = async () => {
  const characterData = await api.getCherater(++currentCharacter)
  console.log(characterData)
  const rick = new Character(characterData)
}

// async function with API
async function initApp(initCharacterId){
  const characterData = await api.getCherater(initCharacterId)
  console.log(characterData)
  const rick = new Character(characterData)
}

initApp(currentCharacter)
arrowLoadNextElement.addEventListener('click', nextCharacter)
// pruebitas
// console.log(api.getCherater(3))
console.log('Hi! world')
// Math.ceil(Math.random()*10)