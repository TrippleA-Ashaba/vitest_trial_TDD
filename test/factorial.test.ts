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
	test("Factorial of 1 is 1", () => {
		assert.equal(facto(1), 1);
	});
	test("Factorial of 2 is 2", () => {
		assert.equal(facto(2), 2);
	});
	test("Factorial of 3 is 6", () => {
		assert.equal(facto(3), 6);
	});
	test("Factorial of 4 is 24", () => {
		assert.equal(facto(4), 24);
	});
	test("Factorial of 12 is 479001600", () => {
		assert.equal(facto(12), 479001600);
	});
});
