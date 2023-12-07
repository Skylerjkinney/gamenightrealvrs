export class Player {
    name
    points

    constructor(setName, setPoints) {
        // this is the info for the player object
        console.log('generating character', setName, setPoints)
        this.name = setName
        this.points = setPoints
        this.greeting()
    }
    greeting() {
        console.log(`My name is ${this.name}, and I have ${this.points} points!`)
    }
    playerTemplate() {
        // this is the template for the old/new players
        return `<div class="col-4 bg-white shadow rounded text-center">
    <h3>${this.name}</h3>
    <h4>${this.points}</h4>
</div>`
    }
}