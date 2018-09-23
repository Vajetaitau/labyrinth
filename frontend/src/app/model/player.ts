import Coordinates from "./coordinates";

export default class Player extends Coordinates {
	private readonly _name: string;
	private readonly _visibleRadius: number;

	constructor(json: any = null) {
		if (json) {
			super(json._x, json._y);
			this._name = json._name;
			this._visibleRadius = json._visibleRadius;
		}
	}

	// constructor(name: string, x: number, y: number, visibleRadius: number) {
	// 	super(x, y);
	// 	this._name = name;
	// 	this._visibleRadius = visibleRadius;
	// }

	get name(): string {
		return this._name;
	}

	get visibleRadius(): number {
		return this._visibleRadius;
	}
}
