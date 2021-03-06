module.exports = {
    rules: {
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': ['error', 3],
        'consistent-return': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': 'error',
        'dot-notation': ['error', {
            'allowKeywords': false
        }],
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': ['error', {
            'allowElseIf': false
        }],
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': ['error', {
            'ignoreArrayIndexes': true,
            'enforceConst': true
        }],
        'no-multi-spaces': ['error', {
            'exceptions': {
                'Property': false
            }
        }],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': ['warn', {
            'props': true
        }],
        'no-proto': 'error',
        'no-redeclare': ['error', {
            'builtinGlobals': true
        }],
        'no-restricted-properties': ['error', {
            'object': 'arguments',
            'property': 'callee',
            'message': '\'arguments.callee\' is deprecated.'
        }, {
            'property': '__defineGetter__',
            'message': 'Please use Object.defineProperty instead.'
        }, {
            'property': '__defineSetter__',
            'message': 'Please use Object.defineProperty instead.'
        }, {
            'object': 'Math',
            'property': 'pow',
            'message': 'Use the exponentiation operator (**) instead.'
        }, {
            'object': 'global',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead.'
        }, {
            'object': 'self',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead.'
        }, {
            'object': 'window',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead.'
        }, {
            'object': 'global',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead.'
        }, {
            'object': 'self',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead.'
        }, {
            'object': 'window',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead.'
        }],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': ['error', {
            'props': true
        }],
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': ['warn', {
            'location': 'anywhere'
        }],
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        'radix': 'error',
        'require-await': 'off',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside', {
            'functionPrototypeMethods': true
        }],
        'yoda': 'error'
    }
};
