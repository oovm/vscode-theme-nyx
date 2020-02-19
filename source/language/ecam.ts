export const typescript = [
    {
        name: 'ts primitive/builtin types',
        scope: 'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
            foreground: '#E5C07B',
        },
    },
    {
        name: 'Class name',
        scope: [
            'entity.name.class',
            'variable.other.class.js',
            'variable.other.class.ts',
        ],
        settings: {
            foreground: '#E5C07B',
        },
    },
    {
        name: 'js/ts punctuation separator key-value',
        scope: 'punctuation.separator.key-value',
        settings: {
            foreground: '#abb2bf',
        },
    },
    {
        name: 'js/ts italic',
        scope: 'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        settings: {
            fontStyle: 'italic',
        },
    },
    {
        name: 'js/ts import keyword',
        scope: 'keyword.operator.expression.import',
        settings: {
            foreground: '#61AFEF',
        },
    },
    {
        name: 'math js/ts',
        scope: 'support.constant.math',
        settings: {
            foreground: '#E5C07B',
        },
    },
    {
        name: 'math property js/ts',
        scope: 'support.constant.property.math',
        settings: {
            foreground: '#d19a66',
        },
    },
    {
        name: 'js/ts variable.other.constant',
        scope: 'variable.other.constant',
        settings: {
            foreground: '#E5C07B',
        },
    },
]

export const javascript = [
    {
        name: 'operator logical',
        scope: 'keyword.operator.logical.js',
        settings: {
            foreground: '#56b6c2',
        },
    },
    {
        name: 'Reset JavaScript string interpolation expression',
        scope: [
            'meta.template.expression',
        ],
        settings: {
            foreground: '#abb2bf',
        },
    },
    {
        name: 'Import module JS',
        scope: [
            'keyword.operator.module',
        ],
        settings: {
            foreground: '#c678dd',
        },
    },
    {
        name: 'js Flowtype',
        scope: [
            'support.type.type.flowtype',
        ],
        settings: {
            foreground: '#61AFEF',
        },
    },
    {
        name: 'js Flow',
        scope: [
            'support.type.primitive',
        ],
        settings: {
            foreground: '#E5C07B',
        },
    },
    {
        name: 'js class prop',
        scope: [
            'meta.property.object',
        ],
        settings: {
            foreground: '#e06c75',
        },
    },
    {
        name: 'js func parameter',
        scope: [
            'variable.parameter.function.js',
        ],
        settings: {
            foreground: '#e06c75',
        },
    },
    {
        name: 'js template literals begin',
        scope: [
            'keyword.other.template.begin',
        ],
        settings: {
            foreground: '#98c379',
        },
    },
    {
        name: 'js template literals end',
        scope: [
            'keyword.other.template.end',
        ],
        settings: {
            foreground: '#98c379',
        },
    },
    {
        name: 'js template literals variable braces begin',
        scope: [
            'keyword.other.substitution.begin',
        ],
        settings: {
            foreground: '#98c379',
        },
    },
    {
        name: 'js template literals variable braces end',
        scope: [
            'keyword.other.substitution.end',
        ],
        settings: {
            foreground: '#98c379',
        },
    },
    {
        name: 'js operator.assignment',
        scope: [
            'keyword.operator.assignment',
        ],
        settings: {
            foreground: '#56b6c2',
        },
    },

]