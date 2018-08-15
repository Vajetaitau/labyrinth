import Coordinates from "../model/coordinates";

export default class SpiralFactory {
	private readonly _cofA: number;
	private readonly _cofB: number;
	private readonly e = 2.71828;

	constructor(cofA: number, cofB: number) {
		this._cofA = cofA;
		this._cofB = cofB;
	}

	public getSpiralCoords(angle: number): Coordinates {
		// Polar coordinates
		const angleInRadius = angle / 180 * Math.PI;
		const distance = this._cofA * Math.pow(this.e, this._cofB * angleInRadius) - this._cofA;

		// To Cartesian coordinates
		const x = distance * Math.cos(angleInRadius);
		const y = distance * Math.sin(angleInRadius);

		return new Coordinates(x | 0, y | 0);
	}
}
