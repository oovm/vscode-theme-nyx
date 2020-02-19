export const python = [
    {
        name: 'support.variable.magic.python',
        scope: 'support.variable.magic.python',
        settings: {
            foreground: '#e06c75',
        },
    },
    {
        name: 'punctuation.separator.parameters.python',
        scope: [
            'punctuation.separator.period.python',
            'punctuation.separator.element.python',
            'punctuation.parenthesis.begin.python',
            'punctuation.parenthesis.end.python',
        ],
        settings: {
            foreground: '#abb2bf',
        },
    },
    {
        name: 'variable.parameter.function.language.special.self.python',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
            foreground: '#E5C07B',
        },
    },
    {
        name: 'python parameter',
        scope: 'variable.parameter.function.language.python',
        settings: {
            foreground: '#d19a66',
        },
    },
    {
        name: 'python type',
        scope: 'support.type.python',
        settings: {
            foreground: '#56b6c2',
        },
    },
    {
        name: 'python logical',
        scope: 'keyword.operator.logical.python',
        settings: {
            foreground: '#c678dd',
        },
    },

    {
        name: 'pyCs',
        scope: 'variable.parameter.function.python',
        settings: {
            foreground: '#d19a66',
        },
    },
    {
        name: 'python block',
        scope: [
            'punctuation.definition.arguments.begin.python',
            'punctuation.definition.arguments.end.python',
            'punctuation.separator.arguments.python',
            'punctuation.definition.list.begin.python',
            'punctuation.definition.list.end.python',
        ],
        settings: {
            foreground: '#abb2bf',
        },
    },
    {
        name: 'python function-call.generic',
        scope: 'meta.function-call.generic.python',
        settings: {
            foreground: '#61AFEF',
        },
    },
    {
        name: 'python placeholder reset to normal string',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
            foreground: '#98c379',
        },
    },
    {
        name: 'Python Keyword Control',
        scope: 'keyword.control.import.python,keyword.control.flow.python',
        settings: {
            fontStyle: 'italic',
        },
    },
    {
        name: 'python function decorator @',
        scope: 'meta.function.decorator.python',
        settings: {
            foreground: '#61AFEF',
        },
    },
    {
        name: 'python function support',
        scope: [
            'support.token.decorator.python',
            'meta.function.decorator.identifier.python',
        ],
        settings: {
            foreground: '#56b6c2',
        },
    },
]