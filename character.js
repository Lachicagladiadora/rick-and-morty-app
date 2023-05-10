// Object of character
export default class Character {
    constructor({name, image, species, origin, gender, status}){
      this.name = name;
      this.image = image;
      this.species = species;
    //   this.origin = origin;
      this.gender = gender;
      this.status = status;
      this.characterImageContainerElement = document.getElementById("character-image-container")
      this.characterNameContainerElement = document.getElementById("character-name-container")
      this.characterDescriptionContainerElement = document.getElementById("character-description-container")
      this.render()
    }
    builtImage(){
      return `
        <img class="character-image" src="${this.image}" alt="${this.name}">
    `
    }
    
    builtName(){
        return `
          <div class="character-name">
            <h2>${this.name}</h2>
          </div>
      `
      }

      builtDescription(){
        return `
        <div class="character-labels">
        <h3 class="character-label">Species: ${this.species} </h3>
        
        <h3 class="character-label">Gender: ${this.gender} </h3>
        <h3 class="character-label">Status: ${this.status} </h3>
      </div>
      `
      }

    render(){
        this.characterImageContainerElement.innerHTML=this.builtImage()
        this.characterNameContainerElement.innerHTML=this.builtName()
        this.characterDescriptionContainerElement.innerHTML=this.builtDescription()
    }
  }

//   <h3 class="character-label">Origin: ${this.origin} </h3>