import {assert} from "chai";
import {describe, it} from "mocha";
import BacktrackPoint from "../../app/model/backtrack-point";
import DirectionStatus from "../../app/enum/direction-status-enum";
import BacktrackStatus from "../../app/enum/backtrack-status-enum";
import Direction from "../../app/enum/direction-enum";

describe("Point", function () {
	describe("#getAvailableOptions", function () {
		it("Should be only EAST", function () {
			const point = new BacktrackPoint(0, 0,
				DirectionStatus.CLOSED,
				DirectionStatus.CLOSED,
				DirectionStatus.OPEN,
				DirectionStatus.CLOSED,
				BacktrackStatus.CLOSED,
				BacktrackStatus.CLOSED,
				BacktrackStatus.NOT_VISITED_CHILD,
				BacktrackStatus.CLOSED
			);
			assert.deepStrictEqual(point.getAvailableOptions(), [Direction.EAST]);
		});
		it("Should be only NORTH", function () {
			const point = new BacktrackPoint(0, 0,
				DirectionStatus.OPEN,
				DirectionStatus.CLOSED,
				DirectionStatus.CLOSED,
				DirectionStatus.CLOSED,
				BacktrackStatus.NOT_VISITED_CHILD,
				BacktrackStatus.CLOSED,
				BacktrackStatus.CLOSED,
				BacktrackStatus.CLOSED
			);
			assert.deepStrictEqual(point.getAvailableOptions(), [Direction.NORTH]);
		});
		it("Should be empty", function () {
			const point = new BacktrackPoint(0, 0,
				DirectionStatus.OPEN,
				DirectionStatus.CLOSED,
				DirectionStatus.CLOSED,
				DirectionStatus.CLOSED,
				BacktrackStatus.VISITED_CHILD,
				BacktrackStatus.CLOSED,
				BacktrackStatus.CLOSED,
				BacktrackStatus.CLOSED
			);
			assert.deepStrictEqual(point.getAvailableOptions(), []);
		});
	});
});
