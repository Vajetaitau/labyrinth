import Coordinates from "../model/coordinates";
import {labyrinthRepo} from "../repository/labyrinth-repository";
import NextMoveDirectionFactory from "../factory/next-move-direction-factory";
import {backtrackRepo} from "../repository/backtrack-repository";
import Direction from "../enum/direction-enum";
import NextPointFactory from "../factory/next-point-factory";
import DirectionUtil from "../util/direction-util";

class GenerationService {

	public async fillUpSpace(coord: Coordinates, radius: number, stepCount: number) {
		let openPoint = await backtrackRepo.getRandomOpenForGenerationPoint(coord, radius);
		console.log(openPoint.x, openPoint.y);
		const unreachableCoord = new Coordinates(999999, 999999);
		while (openPoint != null) {
			await this.connectPoints(openPoint, unreachableCoord, stepCount, stepCount);
			openPoint = await backtrackRepo.getRandomOpenForGenerationPoint(coord, radius);
			console.log(openPoint.x, openPoint.y);
		}
	}

	public async connectPoints(startCoord: Coordinates, endCoord: Coordinates, tooFar: number, stepLimit = 999999) {
		await this.makeMoves(startCoord, startCoord, endCoord, 0, tooFar, stepLimit);
		await this.cleanState();
	}

	private async makeMoves(currentCoord: Coordinates, startCoord: Coordinates, endCoord: Coordinates, i: number, tooFar: number, stepLimit: number): Promise<Coordinates> {
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

		if (nextPoint.hasSameCoordinates(endCoord) || i > stepLimit) {
			return nextPoint;
		} else {
			return await this.makeMoves(nextPoint, startCoord, endCoord, i + 1, tooFar, stepLimit);
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
				DirectionUtil.opposite(moveTo),
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

	public async cleanState() {
		await labyrinthRepo.updateState();
		await backtrackRepo.cleanState();
	}
}

export let generationService = new GenerationService();
