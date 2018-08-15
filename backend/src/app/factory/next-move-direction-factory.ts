import * as _ from "lodash";
import Direction from "../enum/direction-enum";
import DirectionalProbability from "../model/directional-probability";
import BacktrackPoint from "../model/backtrack-point";
import Coordinates from "../model/coordinates";

export default class NextMoveDirectionFactory {
	private _currentPoint: BacktrackPoint;
	private _endCoord: Coordinates;

	constructor(currentPoint: BacktrackPoint, endCoord: Coordinates) {
		this._currentPoint = currentPoint;
		this._endCoord = endCoord;
	}

	public getRandomDirection() {
		const probabilityMap = [];

		const optionsProbabilities = this.getOptionsProbabilities();
		optionsProbabilities.forEach(function (optionProbability) {
			const percents = Math.ceil(optionProbability.probability * 100);
			_.times(percents, function (i) {
				probabilityMap.push(optionProbability.direction);
			});
		});

		const randomIndex = Math.floor(Math.random() * 100);
		return probabilityMap[randomIndex];
	}

	private getOptionsProbabilities() {
		const options = this._currentPoint.getAvailableOptions();
		const averageProb = 1 / options.length;

		const directionalProbs = new Array<DirectionalProbability>();
		if (options.find(opt => opt === Direction.NORTH)) {
			directionalProbs.push(new DirectionalProbability(Direction.NORTH, averageProb));
		}
		if (options.find(opt => opt === Direction.SOUTH)) {
			directionalProbs.push(new DirectionalProbability(Direction.SOUTH, averageProb));
		}
		if (options.find(opt => opt === Direction.EAST)) {
			directionalProbs.push(new DirectionalProbability(Direction.EAST, averageProb));
		}
		if (options.find(opt => opt === Direction.WEST)) {
			directionalProbs.push(new DirectionalProbability(Direction.WEST, averageProb));
		}
		return directionalProbs;
	}
}
