import Coordinates from "../coordinates";

class PlayerMovedDto {
	private readonly _playerName: string;
	private readonly _newPosition: Coordinates;

	constructor(playerName: string, newPosition: Coordinates) {
		this._playerName = playerName;
		this._newPosition = newPosition;
	}

	get playerName() {
		return this._playerName;
	}

	get newPosition() {
		return this._newPosition;
	}
}

export default PlayerMovedDto;
