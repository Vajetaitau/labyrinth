import * as _ from "lodash";
import Coordinates from "../model/coordinates";
import Direction from "../enum/direction-enum";
import BacktrackPoint from "../model/backtrack-point";
import DirectionStatus from "../enum/direction-status-enum";
import BacktrackStatus from "../enum/backtrack-status-enum";

export default class NextPointFactory {
	private readonly _newCoord: Coordinates;
	private readonly _parentDirection: Direction;
	private readonly _neighbors: Array<Direction>;
	private readonly _startCoord: Coordinates;
	private readonly _endCoord: Coordinates;
	private readonly _tooFar: number;

	constructor(newCoord: Coordinates, parentDirection: Direction, neighbors: Array<Direction>, startCoord: Coordinates, endCoord: Coordinates, tooFar: number) {
		this._newCoord = newCoord;
		this._parentDirection = parentDirection;
		this._neighbors = neighbors;
		this._startCoord = startCoord;
		this._endCoord = endCoord;
		this._tooFar = tooFar;
	}

	getNextPoint(): BacktrackPoint {
		return new BacktrackPoint(
			this._newCoord.x, this._newCoord.y,
			this.getDirectionStatus(Direction.NORTH),
			this.getDirectionStatus(Direction.SOUTH),
			this.getDirectionStatus(Direction.EAST),
			this.getDirectionStatus(Direction.WEST),
			this.getBacktrackStatus(Direction.NORTH),
			this.getBacktrackStatus(Direction.SOUTH),
			this.getBacktrackStatus(Direction.EAST),
			this.getBacktrackStatus(Direction.WEST)
		);
	}

	private getDirectionStatus(direction: Direction): DirectionStatus {
		const neighboarExists = _.includes(this._neighbors, direction);
		if (neighboarExists && direction !== this._parentDirection) {
			return DirectionStatus.CLOSED;
		} else if (this.endCoordsAreTooFar()) {
			return DirectionStatus.OPEN_BUT_TOO_FAR;
		} else {
			return DirectionStatus.OPEN_END;
		}
	}

	private endCoordsAreTooFar() {
		// distance from a straight line going between points: startCoord and endCoord
		const distanceFromLine =
			Math.abs(
				(this._endCoord.y - this._startCoord.y) * this._newCoord.x
				- (this._endCoord.x - this._startCoord.x) * this._newCoord.y
				+ this._endCoord.x * this._startCoord.y
				- this._endCoord.y * this._startCoord.x
			)
			/
			Math.sqrt(
				Math.pow(this._endCoord.y - this._startCoord.y, 2)
				+ Math.pow(this._endCoord.x - this._startCoord.x, 2)
			);
		// middle point of that line
		const middlePoint = new Coordinates(
			(this._startCoord.x + this._endCoord.x) / 2,
			(this._startCoord.y + this._endCoord.y) / 2
		);
		const halfOfLine = this._startCoord.getDistanceTo(middlePoint);
		// distance from the middle of the line
		const distanceFromMiddle = this._newCoord.getDistanceTo(middlePoint);
		return distanceFromLine > this._tooFar || distanceFromMiddle > halfOfLine + this._tooFar;
	}

	private getBacktrackStatus(direction: Direction): BacktrackStatus {
		if (direction === this._parentDirection) {
			return BacktrackStatus.PARENT;
		} else {
			const neighborExists = _.includes(this._neighbors, direction);
			if (neighborExists) {
				return BacktrackStatus.CLOSED;
			} else {
				return BacktrackStatus.NOT_VISITED_CHILD;
			}
		}
	}
}
