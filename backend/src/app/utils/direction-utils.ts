import Direction from "../enum/direction-enum";

class DirectionUtils {
	static values(): Array<Direction> {
		return [Direction.NORTH, Direction.SOUTH, Direction.EAST, Direction.WEST];
	}

	static opposite(direction: Direction): Direction {
		if (direction === Direction.NORTH) {
			return Direction.SOUTH;
		} else if (direction === Direction.SOUTH) {
			return Direction.NORTH;
		} else if (direction === Direction.EAST) {
			return Direction.WEST;
		} else if (direction === Direction.WEST) {
			return Direction.EAST;
		}
	}
}

export default DirectionUtils;
