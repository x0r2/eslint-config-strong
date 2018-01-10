module.exports = {
    rules: {
        'array-bracket-newline': 'error',
        'array-bracket-spacing': 'error',
        'array-element-newline': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'camelcase': 'error',
        'capitalized-comments': 'error',
        'comma-dangle': ['error', {
            functions: 'never'
        }],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': 'error',
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': ['error', 'declaration', {
            'allowArrowFunctions': true
        }],
        'function-paren-newline': ['error', 'never'],
        'id-blacklist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
        'id-length': ['error', {
            min: 2,
            max: 20,
            exceptions: ['i', 'j', 'k', 'l', 'm', 'n']
        }],
        'id-match': 'off',
        'implicit-arrow-linebreak': 'error',
        'indent': ['error', 4, {SwitchCase: 1}],
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'off', // FIXME
        'linebreak-style': 'error',
        'lines-around-comment': ['error', {
            beforeLineComment: true,
            afterBlockComment: true,
            allowBlockEnd: true,
            allowBlockStart: true
        }], // FIXME
        'lines-between-class-members': 'error' // FIXME
    }
};
