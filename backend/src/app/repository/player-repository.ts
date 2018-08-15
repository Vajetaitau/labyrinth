import Point from "../model/point";
import QueryBuilder from "./query/query-builder";

class PlayerRepository {
	async getPlayerPoint(player: string): Promise<Point> {
		const queryResult = await new QueryBuilder()
			.query(
				"select l.x, l.y, l.north, l.south, l.east, l.west " +
				"from player as p                                  " +
				"inner join labyrinth l on p.x = l.x and p.y = l.y " +
				"where p.name = $1                                 "
				, [player]
			);
		const firstRow = queryResult.rows[0];
		return new Point(
			firstRow.x, firstRow.y,
			firstRow.north, firstRow.south, firstRow.east, firstRow.west
		);
	}

	async getVisiblePoints(player: string): Promise<Array<Point>> {
		const queryResult = await new QueryBuilder()
			.query(
				"select l.x, l.y, l.north, l.south, l.east, l.west                    " +
				"from player as p                                                     " +
				"inner join labyrinth as l on (p.x + $2 >= l.x) and (p.x - $2 <= l.x) " +
				"                         and (p.y + $2 >= l.y) and (p.y - $2 <= l.y) " +
				"where p.name = $1                                                    "
				, [player, 10]
			);
		return queryResult.rows.map(r => {
			return new Point(r.x, r.y, r.north, r.south, r.east, r.west);
		});
	}

	public async move(player: string, x: number, y: number): Promise<void> {
		const queryResult = await new QueryBuilder()
			.query(
				"update player  " +
				"set            " +
				"x = $1,        " +
				"y = $2         " +
				"where name = $3"
				, [x, y, player]
			);
		return;
	}
}

export const playerRepo = new PlayerRepository();
