import { router } from './router-config.js';
import { PlayersController } from './controllers/PlayerController.js';
import { PlayersService } from './services/PlayerServices.js';

class App {



  router = router
  PlayersController = new PlayersController()

}


const app = new App()
// @ts-ignore
window.app = app
