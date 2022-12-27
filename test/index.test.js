const assert = require('assert');
const sum = require('../index');

describe("Main tests", () => {
	it("Basic positive test", () => {
		assert.equal(sum(1,2), 3);
		assert.equal(sum(5, 8), 13);
	});

	it("Basic negative test", () => {
		assert.equal(sum(-3, 2), -1);
		assert.equal(sum(-13, 20), 7);
		assert.equal(sum(20, -20), 0);
	});

})
