import Coordinates from "../coordinates";

class PlayerMovedDto {
	private readonly _playerName: string;
	private readonly _newPosition: Coordinates;

	constructor(json: any) {
		this._playerName = json._playerName;
		this._newPosition = new Coordinates(json._newPosition._x, json._newPosition._y);
	}

	get playerName() {
		return this._playerName;
	}

	get newPosition(): Coordinates {
		return this._newPosition;
	}
}

export default PlayerMovedDto;
