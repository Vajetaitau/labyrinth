import io from "../app";
import BaseController from "./base-controller";
import {playingService} from "../service/playing-service";

class PlayerController extends BaseController {

	getPlayer() {
		io.on("connection", function(socket) {
			socket.on("PlayerController_GetPlayer", async function () {
				socket.playerName = "Vajetaitau";
				const player = await playingService.getPlayer(socket.playerName);
				console.log(player);
				socket.emit("PlayerController_GetPlayer_Response", player);
			});
		});

	}

	register() {
		this.getPlayer();
	}
}

export const playerController = new PlayerController();
