import Coordinates from "../model/coordinates";
import {labyrinthRepo} from "../repository/labyrinth-repository";
import NextMoveDirectionFactory from "../factory/next-move-direction-factory";
import {backtrackRepo} from "../repository/backtrack-repository";
import Direction from "../enum/direction-enum";
import NextPointFactory from "../factory/next-point-factory";

class GenerationService {

	public async fillUpSpace(coord: Coordinates, radius: number) {
		const centralPoint = await labyrinthRepo.getPoint(coord.x, coord.y);
		// gaunam tašką
	}

	public async connectPointsNew(startCoord: Coordinates, endCoord: Coordinates, tooFar: number) {
		await this.makeMoves(startCoord, startCoord, endCoord, 0, tooFar);
		await this.cleanState();
	}

	private async makeMoves(currentCoord: Coordinates, startCoord: Coordinates, endCoord: Coordinates, i: number, tooFar: number): Promise<Coordinates> {
		const currentPoint = await labyrinthRepo.getPoint(currentCoord.x, currentCoord.y);
		const options = currentPoint.getAvailableOptions();
		let nextPoint;
		if (options.length > 0) {
			const nextMoveDirection = new NextMoveDirectionFactory(currentPoint, endCoord).getRandomDirection();
			const newPoint = await this.move(currentPoint, nextMoveDirection, startCoord, endCoord, tooFar);
			nextPoint = newPoint;
		} else {
			nextPoint = currentPoint.parentCoord();
		}

		if (nextPoint.hasSameCoordinates(endCoord)/*|| i > 1000*/) {
			return nextPoint;
		} else {
			return await this.makeMoves(nextPoint, startCoord, endCoord, i + 1, tooFar);
		}
	}

	private async move(moveFrom: Coordinates, moveTo: Direction, startCoord: Coordinates, endCoord: Coordinates, tooFar: number) {
		const newCoord = moveFrom.pointInDirection(moveTo);
		const exists = await labyrinthRepo.exists(newCoord.x, newCoord.y);

		if (exists) {
			await backtrackRepo.updateToVisitedChild(moveFrom, moveTo);
			return newCoord;
		} else {
			const neighbours = await labyrinthRepo.getNeighbourDirections(newCoord.x, newCoord.y);
			const nextPointFactory = new NextPointFactory(
				newCoord,
				Direction.oposite(moveTo),
				neighbours,
				startCoord,
				endCoord,
				tooFar
			);
			const nextPoint = nextPointFactory.getNextPoint();
			await labyrinthRepo.saveNewPoint(nextPoint, neighbours);
			return nextPoint;
		}
	}

	private async cleanState() {
		// let's not clean OPEN_BUT_TOO_FAR, so we can fill the labyrinth in a better way later
		// await labyrinthRepo.cleanState();
		await backtrackRepo.cleanState();
	}
}

export let pointConnectionService = new GenerationService();
