import * as _ from "lodash";
import * as Jimp from "jimp";
import QueryBuilder from "../app/repository/query/query-builder";
import Point from "../app/model/point";
import DirectionStatus from "../app/enum/direction-status-enum";
import Coordinates from "../app/model/coordinates";

process.on("unhandledRejection", up => {
	throw up;
});
const allLabyrinthPoints = new Array<Point>();

const transparent = Jimp.rgbaToInt(0, 0, 0, 0);
const pathColor = Jimp.rgbaToInt(255, 255, 255, 255); // white
const wallColor = Jimp.rgbaToInt(255, 0, 0, 255);     // red

const size = 2000;
loadRows(allLabyrinthPoints, 50, 0).then(() => {
	const x = new (Jimp as any)(size, size, (err: Error, image: Jimp.Jimp) => {
		for (const point of allLabyrinthPoints) {
			console.log(point.x, point.y, point.north, point.south, point.east, point.west);
			const xx = new Coordinates(point.x * 2 + size / 2, point.y * -2 + size / 2);

			const north = paintConnection(xx.southPoint(), point.north); // direction is different, because Jimp y axis is upside down
			const south = paintConnection(xx.northPoint(), point.south);
			const east = paintConnection(xx.eastPoint(), point.east);
			const west = paintConnection(xx.westPoint(), point.west);

			const topL = paintWall(xx.northPoint().westPoint());
			const topR = paintWall(xx.northPoint().eastPoint());
			const bottomL = paintWall(xx.southPoint().westPoint());
			const bottomR = paintWall(xx.southPoint().eastPoint());

			const center = paintPath(xx);
		}

		function paintConnection(coord: Coordinates, status: DirectionStatus) {
			if (status !== DirectionStatus.CLOSED) {
				paintPath(coord);
			} else {
				paintWall(coord);
			}
		}

		function paintPath(coord: Coordinates) {
			image.setPixelColor(pathColor, coord.x, coord.y);
		}

		function paintWall(coord: Coordinates) {
			image.setPixelColor(wallColor, coord.x, coord.y);
		}

		image.write("test.png", (writingErr) => {
			if (writingErr) { throw writingErr; }
		});
	});
});

async function loadRows(rowArray: Point[], limit: number, offset: number) {
	const rows = await returnRows(limit, offset);
	if (rows.length > 0) {
		rowArray.push(...rows);
		await loadRows(rowArray, limit, offset + limit);
	}

	return rowArray;
}

async function returnRows(limit: number, offset: number) {
	const result = await new QueryBuilder()
		.query(
			"select x, y, north, south, east, west " +
			"from labyrinth                        " +
			"order by x, y                         " +
			"limit $1 offset $2                    "
			, [limit, offset]
		);

	return _.map(result.rows, row => {
		return new Point(row.x, row.y, row.north, row.south, row.east, row.west);
	});
}
