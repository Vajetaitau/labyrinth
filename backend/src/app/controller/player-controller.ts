import io from "../app";
import BaseControllerInt from "./base-controller-int";
import { playingService } from "../service/playing-service";

class PlayerController extends BaseControllerInt {

	onPlayerConnection() {
		io.on("connection", function () {
			playingService.getPlayer("Vajetaitau");
			console.log("Connection!");
		});
	}

	register() {
		this.onPlayerConnection();
	}
}

export const playerController = new PlayerController();
