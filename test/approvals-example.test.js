const approvals = require('./utilities/approvals').configure();

describe('Example tests with approvals', function () {
    it('describe expectation', function () {
        approvals.verify({
            value: 'This is a test',
            description: 'Testing that approvals behaves as expected'
        })
    });
});