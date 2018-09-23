import Coordinates from "../../model/coordinates";

class MoveResponse {
	private readonly _from: Coordinates;
	private readonly _to: Coordinates;

	constructor(from: Coordinates, to: Coordinates) {
		this._from = from;
		this._to = to;
	}

	positionChanged() {
		return !this._from.hasSameCoordinates(this._to);
	}

	get to() {
		return this._to;
	}
}

export default MoveResponse;
