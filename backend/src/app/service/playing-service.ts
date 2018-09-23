import {playerRepo} from "../repository/player-repository";
import Player from "../model/player";
import Point from "../model/point";
import Direction from "../enum/direction-enum";
import DirectionStatus from "../enum/direction-status-enum";

class PlayingService {
	public async getPlayer(player: string): Promise<Player> {
		const playerPoint = await playerRepo.getPlayerPoint(player);
		return new Player(player, playerPoint.x, playerPoint.y, 10);
	}

	public async getVisiblePoints(player: string): Promise<Array<Point>> {
		return await playerRepo.getVisiblePoints(player);
	}


}

export const playingService = new PlayingService();
