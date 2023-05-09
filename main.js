// import files
import './style.css'
// import API
import API from './api.js'
// API
const api = new API()

// get items
const characterContainerElement = document.getElementById("character-container")

// validate
if (!characterContainerElement) alert('element with id"character-container"does not exist')

// Object of character
class Character {
  constructor({name, image}){
    this.name = name;
    this.image = image;
    this.render()
  }
  built(){
    return `
    <article class="character">
    <div class="character-grid">
      <h2 class="character-name">${this.name}</h2>
      <img src="${this.image}" alt="">
    </div>
    </article>  
  `
  }
  render(){
    characterContainerElement.innerHTML=this.built()
  }
}

// render character


// async function with API
async function initApp(initCharacterId){
  const characterData = await api.getCherater(initCharacterId)
  console.log(characterData)
  const rick = new Character(characterData)
}

// initApp(1)

// pruebitas
// console.log(api.getCherater(1))
// console.log('Hi! world')