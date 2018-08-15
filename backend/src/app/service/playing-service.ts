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

	public async move(player: string, direction: Direction): Promise<Point> {
		const currentPoint = await playerRepo.getPlayerPoint(player);
		if (currentPoint.statusInDirection(direction) === DirectionStatus.OPEN) {
			const nextCoords = currentPoint.pointInDirection(direction);
			await playerRepo.move(player, nextCoords.x, nextCoords.y);
			return await playerRepo.getPlayerPoint(player);
		} else {
			return currentPoint;
		}
	}
}

export const playingService = new PlayingService();
