import {Component, OnInit} from "@angular/core";
import Player from "../../model/player";
import {socket} from "../../globals/socket";
import PlayerMovedDto from "../../model/moving/player-moved-dto";

@Component({
	selector: "app-labyrinth",
	templateUrl: "./labyrinth.component.html",
	styleUrls: ["./labyrinth.component.css"]
})
export class LabyrinthComponent implements OnInit {
	player: Player;
	moves: Array<PlayerMovedDto>;
	moveCount = 0;
	responseCount = 0;

	constructor() {
		this.player = new Player();
		this.moves = [];
	}

	ngOnInit() {
		const self = this;
		socket.emit("PlayerController_GetPlayer");
		socket.on("PlayerController_GetPlayer_Response", function (playerResponse) {
			self.player = new Player(playerResponse);
		});

		socket.on("MovingController_PlayerMoved", function(playerMoved) {
			self.responseCount++;
			self.moves.push(new PlayerMovedDto(playerMoved));
		});
	}

	moveNorth() {
		this.moveCount++;
		socket.emit("MovingController_MoveNorth");
	}

	moveSouth() {
		this.moveCount++;
		socket.emit("MovingController_MoveSouth");
	}

	moveEast() {
		this.moveCount++;
		socket.emit("MovingController_MoveEast");
	}

	moveWest() {
		this.moveCount++;
		socket.emit("MovingController_MoveWest");
	}

}
