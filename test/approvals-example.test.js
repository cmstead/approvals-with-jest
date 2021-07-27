const approvals = require('./utilities/approvals').configure();

const SomeData = require('../source/SomeData');

describe('Example tests with approvals', function () {
    it('Verifies SomeData is stringifiable', function () {
        const newData = new SomeData();

        const someDataString = JSON.stringify(newData, null, 4);

        approvals.verify({
            value: someDataString,
            description: 'Testing that approvals behaves as expected'
        })
    });
});