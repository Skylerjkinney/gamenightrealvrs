import { Player } from './models/Players.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [
    new Player('Skyler', 10),
    new Player('jolie', 5)
  ];

}

export const AppState = createObservableProxy(new ObservableAppState())
console.log(AppState.players)