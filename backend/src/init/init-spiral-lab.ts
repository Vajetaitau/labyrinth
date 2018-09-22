import Coordinates from "../app/model/coordinates";
import SpiralFactory from "../app/factory/spiral-factory";
import {generationService} from "../app/service/generation-service";

const spiralFactory = new SpiralFactory(1, 0.3063489);
const distanceBetweenPoints = 10;
const tooFar = 3;

let angle: number;
let coords: Coordinates;
const startCoordinates = new Coordinates(0, 0);

generationService.fillUpSpace(startCoordinates, 100, 7);

// init().then(() => {
// 	generate(50);
// });

async function init() {
	await generationService.cleanState();
	angle = 360;
	coords = spiralFactory.getSpiralCoords(angle);
	await generationService.connectPoints(startCoordinates, coords, tooFar);
}

async function generate(times: number) {
	for (let i = 0; i < times; i++) {
		angle = getNextAngle();
		const nextCoords = spiralFactory.getSpiralCoords(angle);
		await generationService.connectPoints(coords, nextCoords, tooFar);
		coords = nextCoords;
		console.log(coords.x, coords.y);
	}
}

function getNextAngle() {
	const r = coords.getDistanceTo(new Coordinates(0, 0));
	const nextAngle = (180 * distanceBetweenPoints) / (Math.PI * r);
	return (nextAngle + angle) | 0;
}
