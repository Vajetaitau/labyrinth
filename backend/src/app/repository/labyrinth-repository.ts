import * as _ from "lodash";
import QueryBuilder from "./query/query-builder";
import BacktrackPoint from "../model/backtrack-point";
import Direction from "../enum/direction-enum";
import DirectionStatus from "../enum/direction-status-enum";
import BacktrackStatus from "../enum/backtrack-status-enum";
import {backtrackRepo} from "./backtrack-repository";
import Coordinates from "../model/coordinates";

class LabyrinthRepo {
	public getPoint(x: number, y: number): Promise<BacktrackPoint> {
		return new QueryBuilder()
			.query(
				"select l.north north, l.south south, l.east east, l.west west, bi.north b_north, bi.south b_south, bi.east b_east, bi.west b_west " +
				"from labyrinth as l " +
				"inner join backtrack_info as bi on l.x = bi.x and l.y = bi.y " +
				"where l.x = $1 " +
				"and l.y = $2"
				, [x, y]
			)
			.then(res => {
				const firstRow = res.rows[0];
				return new BacktrackPoint(
					x, y,
					firstRow.north,
					firstRow.south,
					firstRow.east,
					firstRow.west,
					firstRow.b_north,
					firstRow.b_south,
					firstRow.b_east,
					firstRow.b_west
				);
			});
	}

	public async exists(x: number, y: number): Promise<boolean> {
		const queryResult = await new QueryBuilder()
			.query(
				"select 1       " +
				"from labyrinth " +
				"where x = $1   " +
				"and y = $2     "
				, [x, y]
			);
		return queryResult.rowCount === 1;
	}

	// returns directions, where neigbour points exist
	public getNeighbourDirections(x: number, y: number): Promise<Array<Direction>> {
		return new QueryBuilder()
			.query(
				"select 'NORTH' d     " +
				"from labyrinth       " +
				"where x = $1         " +
				"and y = $2 + 1       " +
				"union                " +
				"select 'SOUTH' d     " +
				"from labyrinth       " +
				"where x = $1         " +
				"and y = $2 - 1       " +
				"union                " +
				"select 'EAST' d      " +
				"from labyrinth       " +
				"where x = $1 + 1     " +
				"and y = $2           " +
				"union                " +
				"select 'WEST' d      " +
				"from labyrinth       " +
				"where x = $1 - 1     " +
				"and y = $2           "
				, [x, y]
			).then(res => {
				const rows = res.rows;
				return _.map(rows, row => {
					return row.d;
				});
			});
	}

	async saveNewPoint(point: BacktrackPoint, neighboars: Array<Direction>) {
		const queryBuilder = new QueryBuilder();
		const parentDirection = point.parentDirection();

		for (const neigboarDirection of neighboars) {
			if (neigboarDirection !== parentDirection) {
				const neighboarCoord = point.pointInDirection(neigboarDirection);
				queryBuilder
					.addQuery(
						"update labyrinth                                                       " +
						"set " + Direction.oposite(neigboarDirection).toLowerCase() + " = $3    " +
						"where x = $1                                                           " +
						"and y = $2                                                             "
						, res => {
							// console.log(res);
						},
						[neighboarCoord.x, neighboarCoord.y, DirectionStatus.CLOSED]
					)
					.addQuery(
						"update backtrack_info                                                  " +
						"set " + Direction.oposite(neigboarDirection).toLowerCase() + " = $3    " +
						"where x = $1                                                           " +
						"and y = $2                                                             "
						, res => {

						},
						[neighboarCoord.x, neighboarCoord.y, BacktrackStatus.CLOSED]
					);
			} else {
				const parent = point.parentCoord();
				queryBuilder
					.addQuery(
						"update labyrinth                                                  " +
						"set " + Direction.oposite(parentDirection).toLowerCase() + " = $3 " +
						"where x = $1                                                      " +
						"and y = $2                                                        "
						, res => {
							// console.log(res);
						},
						[parent.x, parent.y, DirectionStatus.OPEN]
					)
					.addQuery(
						backtrackRepo.updateToVisitedChildQuery(Direction.oposite(parentDirection))
						, res => {
							// console.log(res);
						},
						[parent.x, parent.y, BacktrackStatus.VISITED_CHILD]
					);
			}
		}

		await queryBuilder
			.addQuery(
				"insert into                                  " +
				"labyrinth(x, y, north, south, east, west)    " +
				"values ($1, $2, $3, $4, $5, $6)              "
				, res => {
					// console.log(res);
				},
				[point.x, point.y, point.north, point.south, point.east, point.west]
			)
			.addQuery(
				"insert into                                    " +
				"backtrack_info(x, y, north, south, east, west) " +
				"values ($1, $2, $3, $4, $5, $6)                ",
				res => {
					// console.log(res);
				},
				[
					point.x, point.y,
					point.backtrackNorth, point.backtrackSouth,
					point.backtrackEast, point.backtrackWest
				]
			)
			.executeInAsyncTransaction();
	}

	async updateState() {
		const northQuery =
			"update labyrinth  " +
			"set north = $2    " +
			"where north = $1  ";
		const southQuery =
			"update labyrinth  " +
			"set south = $2    " +
			"where south = $1  ";
		const eastQuery =
			"update labyrinth  " +
			"set east = $2     " +
			"where east = $1   ";
		const westQuery =
			"update labyrinth  " +
			"set west = $2     " +
			"where west = $1   ";
		const queryArray = [northQuery, southQuery, eastQuery, westQuery];
		const updateArray = [
			[DirectionStatus.OPEN_BUT_TOO_FAR, DirectionStatus.OPEN_END]
		];
		const queryBuilder = new QueryBuilder();
		queryArray.forEach(query => {
			updateArray.forEach(updateValues => {
				queryBuilder.addQuery(query, res => {}, updateValues);
			});
		});
		await queryBuilder.executeInAsyncTransaction();
	}

}

export const labyrinthRepo = new LabyrinthRepo();
