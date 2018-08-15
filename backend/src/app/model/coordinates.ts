import Direction from "../enum/direction-enum";

export default class Coordinates {
	private readonly _x: number;
	private readonly _y: number;

	constructor(x: number, y: number) {
		this._x = x;
		this._y = y;
	}

	getDistanceTo(coord: Coordinates) {
		const xDistance = coord.x - this._x;
		const yDistance = coord.y - this._y;
		return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
	}

	pointInDirection(direction: string): Coordinates {
		if (direction === Direction.NORTH) {
			return this.northPoint();
		} else if (direction === Direction.SOUTH) {
			return this.southPoint();
		} else if (direction === Direction.EAST) {
			return this.eastPoint();
		} else if (direction === Direction.WEST) {
			return this.westPoint();
		} else {
			throw new Error("Wrong direction specified! (" + direction + ")");
		}
	}

	northPoint(): Coordinates {
		return new Coordinates(this.x, this.y + 1);
	}

	southPoint(): Coordinates {
		return new Coordinates(this.x, this.y - 1);
	}

	eastPoint(): Coordinates {
		return new Coordinates(this.x + 1, this.y);
	}

	westPoint(): Coordinates {
		return new Coordinates(this.x - 1, this.y);
	}

	get x(): number {
		return this._x;
	}

	get y(): number {
		return this._y;
	}
}
