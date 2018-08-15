import Direction from "../enum/direction-enum";

export default class DirectionalProbability {
	private readonly _direction: Direction;
	private readonly _probability: number;

	constructor(direction: Direction, probability: number) {
		this._direction = direction;
		this._probability = probability;
	}

	get direction(): Direction {
		return this._direction;
	}

	get probability() {
		return this._probability;
	}
}
