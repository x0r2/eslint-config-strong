module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'arrow-body-style': ['error', 'always'],
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': ['error', {
            before: false,
            after: true
        }],
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': ['error', {
            includeExports: true
        }],
        'no-new-symbol': 'error',
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': ['error', {
            allowUnboundThis: false
        }],
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'sort-imports': ['error', {
            ignoreCase: true
        }],
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': 'error'
    }
};
