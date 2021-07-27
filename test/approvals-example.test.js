const approvals = require('./utilities/approvals').configure();

const SomeData = require('../source/SomeData');

describe('Example tests with approvals', function () {
    it('Verifies SomeData is stringifiable', function () {
        const newData = new SomeData();

        const someDataString = JSON.stringify(newData, null, 4);

        approvals.verify({
            value: someDataString,
            description: 'Verify SomeData can be properly stringified'
        });
    });

    it('Verifies SomeData properly generates string from toString method', function () {
        const newData = new SomeData();

        newData.setValue('hodor', 'HODOR');

        approvals.verify({
            value: newData.toString(),
            description: 'Verify toString returns properly stringified value'
        })
    });
});