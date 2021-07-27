const path = require('path');

const approvalsConfig = require('./approvals.config');
const basePath = path.join(process.cwd(), 'test/approvals');

function configure() {
    const approvals = require('approvals').configure(approvalsConfig);
    
    return {
        verify: ({ value = '', description = '' }) => approvals.verify(basePath, description, value),
        verifyAsJSON: ({ value = {}, description = '' }) => approvals.verifyAsJSON(basePath, description, value)
    };
}

module.exports = {
    configure
};