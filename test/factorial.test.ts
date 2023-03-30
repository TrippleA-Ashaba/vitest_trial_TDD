import { describe, assert, test } from "vitest";
import facto from "../factorial";

describe.skip("Failing tests", () => {
	test("Failing test", () => {
		assert.fail();
	});
});

describe("Testing Factorial function", () => {
	test("Factorial of 0 is 1", () => {
		assert.equal(facto(0), 1);
	});
});
