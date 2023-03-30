import { describe, assert, test } from "vitest";

describe("Failing tests", () => {
	test("Failing test", () => {
		assert.fail();
	});
});
