import Direction from "../enum/direction-enum";
import Coordinates from "../model/coordinates";
import BacktrackStatus from "../enum/backtrack-status-enum";
import QueryBuilder from "./query/query-builder";
import DirectionStatus from "../enum/direction-status-enum";
import {QueryResult} from "pg";
import Point from "../model/point";

class BacktrackRepo {
	public updateToVisitedChildQuery(direction: Direction) {
		return "update backtrack_info                 " +
			"set " + direction.toLowerCase() + " = $3 " +
			"where x = $1                             " +
			"and y = $2                               ";
	}

	async updateToVisitedChild(point: Coordinates, direction: Direction): Promise<void> {
		await new QueryBuilder()
			.query(
				this.updateToVisitedChildQuery(direction)
				, [point.x, point.y, BacktrackStatus.VISITED_CHILD]
			);
	}

	async getRandomOpenForGenerationPoint(point: Coordinates, radius: number) {
		const countResult = await new QueryBuilder()
			.query(
				"select count(*) as count                             " +
				"from labyrinth as l                                  " +
				"where sqrt(pow(l.x - $1, 2) + pow(l.y - $2, 2)) < $3 "
				, [point.x, point.y, radius]
			);
		const count = countResult.rows[0].count;
		if (count > 0) {
			const queryResult = await new QueryBuilder()
				.query(
					"select l.x, l.y, l.north, l.south, l.east, l.west        " +
					"from labyrinth as l                                      " +
					"where sqrt(pow(l.x - $1, 2) + pow(l.y - $2, 2)) < $3     " +
					"and (north = $5 or south = $5 or east = $5 or west = $5) " +
					"offset floor(random() * $4) limit 1                      "
					, [point.x, point.y, radius, count, DirectionStatus.OPEN_BUT_TOO_FAR]
				);
			const row = queryResult.rows[0];
			return new Point(row.x, row.y, row.north, row.south, row.east, row.west);
		} else {
			return null;
		}
	}

	async cleanState() {
		await new QueryBuilder()
			.addQuery(
				"update backtrack_info  " +
				"set north = $2    " +
				"where north = $1  "
				, res => { }
				, [BacktrackStatus.VISITED_CHILD, BacktrackStatus.NOT_VISITED_CHILD]
			)
			.addQuery(
				"update backtrack_info  " +
				"set south = $2    " +
				"where south = $1  "
				, res => { }
				, [BacktrackStatus.VISITED_CHILD, BacktrackStatus.NOT_VISITED_CHILD]
			)
			.addQuery(
				"update backtrack_info  " +
				"set east = $2    " +
				"where east = $1  "
				, res => { }
				, [BacktrackStatus.VISITED_CHILD, BacktrackStatus.NOT_VISITED_CHILD]
			)
			.addQuery(
				"update backtrack_info  " +
				"set west = $2    " +
				"where west = $1  "
				, res => { }
				, [BacktrackStatus.VISITED_CHILD, BacktrackStatus.NOT_VISITED_CHILD]
			)
			.executeInAsyncTransaction();
	}
}

export const backtrackRepo = new BacktrackRepo();
