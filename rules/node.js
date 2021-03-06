module.exports = {
    env: {
        node: true
    },
    rules: {
        'callback-return': 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': ['error', true],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'error'
    }
};
