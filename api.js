

export default class API {
    async getCherater(id){
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
        // .then((response) => response.json())
        // .then((data) => console.log(data))
    }
}