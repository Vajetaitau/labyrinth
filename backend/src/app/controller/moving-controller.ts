import io from "../app";
import BaseController from "./base-controller";
import {movingService} from "../service/moving/moving-service";
import Direction from "../enum/direction-enum";
import PlayerMovedDto from "../model/moving/player-moved-dto";

class MovingController extends BaseController {

	moveNorth() {
		this.onMoveEvent("MovingController_MoveNorth", Direction.NORTH);
	}

	moveSouth() {
		this.onMoveEvent("MovingController_MoveSouth", Direction.SOUTH);
	}

	moveEast() {
		this.onMoveEvent("MovingController_MoveEast", Direction.EAST);
	}

	moveWest() {
		this.onMoveEvent("MovingController_MoveWest", Direction.WEST);
	}

	private onMoveEvent(event: string, direction: Direction) {
		io.on("connection", function (socket) {
			socket.on(event, async function () {
				const moveResponse = await movingService.move(socket.playerName, direction);
				console.log(moveResponse);
				if (moveResponse.positionChanged()) {
					socket.emit("MovingController_PlayerMoved", new PlayerMovedDto(socket.playerName, moveResponse.to));
				}
			});
		});
	}

	register() {
		this.moveNorth();
		this.moveSouth();
		this.moveEast();
		this.moveWest();
	}
}

export const movingController = new MovingController();



