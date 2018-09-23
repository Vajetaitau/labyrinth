import Direction from "../../enum/direction-enum";
import Point from "../../model/point";
import {playerRepo} from "../../repository/player-repository";
import DirectionStatus from "../../enum/direction-status-enum";
import MoveResponse from "./move-response";

class MovingService {
	public async move(player: string, direction: Direction): Promise<MoveResponse> {
		const currentPoint = await playerRepo.getPlayerPoint(player);
		let nextPoint: Point;
		if (currentPoint.statusInDirection(direction) === DirectionStatus.OPEN) {
			const nextCoords = currentPoint.pointInDirection(direction);
			await playerRepo.move(player, nextCoords.x, nextCoords.y);
			nextPoint = await playerRepo.getPlayerPoint(player);
		} else {
			nextPoint = currentPoint;
		}

		return new MoveResponse(currentPoint, nextPoint);
	}
}

export const movingService = new MovingService();
