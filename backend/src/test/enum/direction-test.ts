import {describe, it} from "mocha";
import {assert} from "chai";
import Direction from "../../app/enum/direction-enum";
import DirectionUtil from "../../app/util/direction-util";

describe("Direction", function () {
	describe("#values", function () {
		it("Should return 4 values", function () {
			const values = DirectionUtil.values();
			const expectedValues = [
				Direction.NORTH,
				Direction.SOUTH,
				Direction.EAST,
				Direction.WEST
			];
			assert.deepStrictEqual(values, expectedValues);
		});
	});
});
