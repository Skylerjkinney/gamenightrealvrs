import { AppState } from "../AppState.js";
import { Player } from "../models/Players.js";

class PlayersService {
    addPlayer() {
        //adds players
        let newName = window.prompt('Whats ur name')
        let createdPlayer = new Player(newName)
        AppState.players.push(createdPlayer)
    }
    addPoints(playerName) {
        //adds points
        let selectedPlayer = AppState.players.find(player => player.name == playerName)
        selectedPlayer.points += 1
        console.log(selectedPlayer)
    }
}

export const PlayerService = new PlayersService()

