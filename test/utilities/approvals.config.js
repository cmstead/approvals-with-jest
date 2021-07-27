module.exports = {
    reporters: ['beyondcompare', 'kdiff3', 'vscode'],

    normalizeLineEndingsTo: '\n',

    appendEOL: true,

    EOL: "\n",

    errorOnStaleApprovedFiles: true,

    shouldIgnoreStaleApprovedFile: function (/*fileName*/) { return false; },

    stripBOM: true,

    forceApproveAll: false
};