import Coordinates from "./coordinates";
import DirectionStatus from "../enum/direction-status-enum";
import Direction from "../enum/direction-enum";

export default class Point extends Coordinates {
	private readonly _north: DirectionStatus;
	private readonly _south: DirectionStatus;
	private readonly _east: DirectionStatus;
	private readonly _west: DirectionStatus;

	constructor(x: number, y: number, north: DirectionStatus, south: DirectionStatus, east: DirectionStatus, west: DirectionStatus) {
		super(x, y);
		this._north = north;
		this._south = south;
		this._east = east;
		this._west = west;
	}

	statusInDirection(direction: Direction): DirectionStatus {
		if (direction === Direction.NORTH) {
			return this._north;
		} else if (direction === Direction.SOUTH) {
			return this._south;
		} else if (direction === Direction.EAST) {
			return this._east;
		} else if (direction === Direction.WEST) {
			return this._west;
		} else {
			throw new Error("Wrong direction specified! (" + direction + ")");
		}
	}

	get north(): DirectionStatus {
		return this._north;
	}

	get south(): DirectionStatus {
		return this._south;
	}

	get east(): DirectionStatus {
		return this._east;
	}

	get west(): DirectionStatus {
		return this._west;
	}
}
