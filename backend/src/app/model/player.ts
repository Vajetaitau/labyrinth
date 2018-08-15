import Coordinates from "./coordinates";

export default class Player extends Coordinates {
	private readonly _name: string;
	private readonly _visibleRadius: number;

	constructor(name: string, x: number, y: number, visibleRadius: number) {
		super(x, y);
		this._name = name;
		this._visibleRadius = visibleRadius;
	}

	get name(): string {
		return this._name;
	}

	get visibleRadius(): number {
		return this._visibleRadius;
	}
}
