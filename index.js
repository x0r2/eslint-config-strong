module.exports = {
    extends: [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/strict-mode',
        './rules/variables',
        './rules/node',
        './rules/stylistic-issues',
        './rules/es6'
    ].map(require.resolve)
};
