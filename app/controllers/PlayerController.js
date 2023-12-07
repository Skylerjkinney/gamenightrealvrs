import { AppState } from "../AppState.js";
import { Player } from "../models/Players.js";
import { PlayerService } from "../services/PlayerServices.js";

export class PlayersController {
    constructor() {
        console.log('🐌, loaded player controller')
        this.drawPlayer()
    }
    drawPlayer() {
        const players = AppState.players
        let template = ''
        players.forEach(player => template += player.playerTemplate())
        document.getElementById("player-list").innerHTML = template
    }

}