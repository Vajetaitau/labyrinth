import Point from "../model/point";
import BacktrackStatus from "../enum/backtrack-status-enum";
import DirectionStatus from "../enum/direction-status-enum";
import Direction from "../enum/direction-enum";
import Coordinates from "./coordinates";

export default class BacktrackPoint extends Point {
	private readonly _backtrackNorth: BacktrackStatus;
	private readonly _backtrackSouth: BacktrackStatus;
	private readonly _backtrackEast: BacktrackStatus;
	private readonly _backtrackWest: BacktrackStatus;

	constructor(x: number, y: number, north: DirectionStatus, south: DirectionStatus, east: DirectionStatus, west: DirectionStatus, backtrackNorth: BacktrackStatus, backtrackSouth: BacktrackStatus, backtrackEast: BacktrackStatus, backtrackWest: BacktrackStatus) {
		super(x, y, north, south, east, west);
		this._backtrackNorth = backtrackNorth;
		this._backtrackSouth = backtrackSouth;
		this._backtrackEast = backtrackEast;
		this._backtrackWest = backtrackWest;
	}

	getAvailableOptions(): Array<Direction> {
		const options = [];
		if (this.isOpen(this.north) && this._backtrackNorth === BacktrackStatus.NOT_VISITED_CHILD) {
			options.push(Direction.NORTH);
		}
		if (this.isOpen(this.south) && this._backtrackSouth === BacktrackStatus.NOT_VISITED_CHILD) {
			options.push(Direction.SOUTH);
		}
		if (this.isOpen(this.east) && this._backtrackEast === BacktrackStatus.NOT_VISITED_CHILD) {
			options.push(Direction.EAST);
		}
		if (this.isOpen(this.west) && this._backtrackWest === BacktrackStatus.NOT_VISITED_CHILD) {
			options.push(Direction.WEST);
		}
		return options;
	}

	private isOpen(directionStatus: DirectionStatus) {
		return directionStatus === DirectionStatus.OPEN || directionStatus === DirectionStatus.OPEN_TRANSITION_STAGE;
	}

	parentDirection(): Direction {
		if (this._backtrackNorth === BacktrackStatus.PARENT) {
			return Direction.NORTH;
		} else if (this._backtrackSouth === BacktrackStatus.PARENT) {
			return Direction.SOUTH;
		} else if (this._backtrackEast === BacktrackStatus.PARENT) {
			return Direction.EAST;
		} else if (this._backtrackWest === BacktrackStatus.PARENT) {
			return Direction.WEST;
		} else {
			throw new Error("Parent point does not exist :/");
		}
	}

	parentCoord(): Coordinates {
		return this.pointInDirection(this.parentDirection());
	}

	get backtrackNorth(): BacktrackStatus {
		return this._backtrackNorth;
	}

	get backtrackSouth(): BacktrackStatus {
		return this._backtrackSouth;
	}

	get backtrackEast(): BacktrackStatus {
		return this._backtrackEast;
	}

	get backtrackWest(): BacktrackStatus {
		return this._backtrackWest;
	}
}
