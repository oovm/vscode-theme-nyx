export * from './groovy'
export * from './java'
export * from './markup'
export * from './php'
export * from './python'
export * from './rust'

export * from './data'

export const token = [
    {
        name: 'Sections',
        scope: 'entity.name.section',
        settings: {
            fontStyle: 'bold'
        }
    },
    {
        name: 'CSS: Important Keyword',
        scope: 'keyword.other.important',
        settings: {
            fontStyle: 'bold'
        }
    },
    {
        name: 'Functions',
        scope: [
            'entity.name.function',
            'meta.require',
            'support.function.any-method',
            'variable.function'
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#61AFEF'
        }
    },
    {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
            fontStyle: 'bold',
            foreground: '#E5C07B'
        }
    },
    {
        name: 'support.constant.edge',
        scope: 'support.constant.edge',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'regexp constant character-class',
        scope: 'constant.other.character-class.regexp',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'regexp operator.quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'punctuation.definition',
        scope: 'punctuation.definition.string.begin,punctuation.definition.string.end',
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'Text',
        scope: 'variable.parameter.function',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
            foreground: '#7F848E'
        }
    },
    {
        name: 'Comment Markup Link',
        scope: 'comment markup.link',
        settings: {
            foreground: '#5C6370'
        }
    },
    {
        name: 'markup diff',
        scope: 'markup.changed.diff',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'diff',
        scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'inserted.diff',
        scope: 'markup.inserted.diff',
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'deleted.diff',
        scope: 'markup.deleted.diff',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'js/ts punctuation separator key-value',
        scope: 'punctuation.separator.key-value',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'js/ts italic',
        scope: 'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        settings: {
            fontStyle: 'italic'
        }
    },
    {
        name: 'js/ts import keyword',
        scope: 'keyword.operator.expression.import',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'math js/ts',
        scope: 'support.constant.math',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'math property js/ts',
        scope: 'support.constant.property.math',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'js/ts variable.other.constant',
        scope: 'variable.other.constant',
        settings: {
            foreground: '#E5C07B'
        }
    },
 
    {
        name: 'operator logical',
        scope: 'keyword.operator.logical.js',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'operator bitwise',
        scope: 'keyword.operator.bitwise',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'operator channel',
        scope: 'keyword.operator.channel',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'support.constant.property-value.scss',
        scope: 'support.constant.property-value.scss,support.constant.property-value.css',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'CSS/SCSS/LESS Operators',
        scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'css color standard name',
        scope: 'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'css comma',
        scope: 'punctuation.separator.list.comma.css',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'css attribute-name.id',
        scope: 'support.constant.color.w3c-standard-color-name.css',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'css property-name',
        scope: 'support.type.vendored.property-name.css',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'js/ts template-expression',
        scope: 'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'js/ts module',
        scope: 'support.module.node,support.type.object.module,support.module.node',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'entity.name.type.module',
        scope: 'entity.name.type.module',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'js variable readwrite',
        scope: 'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'comment',
        scope: 'comment.line.double-slash,comment.block.documentation',
        settings: {
            fontStyle: 'italic'
        }
    },
    {
        name: 'js/ts Keyword',
        scope: [
            'keyword.operator.expression.instanceof',
            'keyword.operator.new',
            'keyword.operator.ternary',
            'keyword.operator.optional'
        ],
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'js/ts console',
        scope: 'support.type.object.console',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'js/ts support.variable.property.process',
        scope: 'support.variable.property.process',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'js console function',
        scope: 'entity.name.function,support.function.console',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'js operator',
        scope: 'keyword.operator',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'js dom',
        scope: 'support.type.object.dom',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'js dom variable',
        scope: 'support.variable.dom,support.variable.property.dom',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'keyword.operator',
        scope: 'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'Punctuation',
        scope: 'punctuation.separator.delimiter',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Delimiters',
        scope: 'none',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Operators',
        scope: 'keyword.operator',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Compound Assignment Operators',
        scope: 'keyword.operator.assignment.compound',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Variables',
        scope: 'variable',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Language variables',
        scope: 'variable.language',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Packages',
        scope: 'token.package.keyword',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Packages',
        scope: 'token.package',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Classes',
        scope: 'support.class, entity.name.type.class',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Class name',
        scope: 'entity.name.class.identifier.namespace.type',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Class name',
        scope: [
            'entity.name.class',
            'variable.other.class.js',
            'variable.other.class.ts'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Type Name',
        scope: 'entity.name.type',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Keyword Control',
        scope: 'keyword.control',
        settings: {
            foreground: '#c678dd'
        }
    },

    {
        name: 'Control Elements',
        scope: 'control.elements, keyword.operator.less',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Methods',
        scope: 'keyword.other.special-method',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'Storage',
        scope: 'storage',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Storage JS TS',
        scope: 'token.storage',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
        scope: 'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Support',
        scope: 'support.function',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'Support type',
        scope: 'support.type.property-name',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Support type',
        scope: 'support.constant.property-value',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Support type',
        scope: 'support.constant.font-name',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Meta tag',
        scope: 'meta.tag',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Strings, Inherited Class',
        scope: 'string, entity.other.inherited-class',
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'Constant other symbol',
        scope: 'constant.other.symbol',
        settings: {
            foreground: '#56b6c2'
        }
    },

    {
        name: 'Constants',
        scope: 'constant',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Constants',
        scope: 'punctuation.definition.constant',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Tags',
        scope: 'entity.name.tag',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Attribute IDs',
        scope: 'entity.other.attribute-name.id',
        settings: {
            foreground: '#61AFEF',
            fontStyle: 'normal'
        }
    },
    {
        name: 'Attribute class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
            foreground: '#d19a66',
            fontStyle: 'normal'
        }
    },
    {
        name: 'Selector',
        scope: 'meta.selector',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Values',
        scope: 'none',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
            fontStyle: 'bold',
            foreground: '#e06c75'
        }
    },
    {
        name: 'Headings',
        scope: 'markup.heading punctuation.definition.heading, entity.name.section',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'Units',
        scope: 'keyword.other.unit',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
            fontStyle: 'bold',
            foreground: '#d19a66'
        }
    },
    {
        name: 'Bold',
        scope: 'punctuation.definition.bold',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Italic',
        scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Italic',
        scope: 'emphasis md',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Regular Expressions',
        scope: 'string.regexp',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'Escape Characters',
        scope: 'constant.character.escape',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'Embedded',
        scope: 'punctuation.section.embedded, variable.interpolation',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Illegal',
        scope: 'invalid.illegal',
        settings: {
            foreground: '#FFFFFF'
        }
    },
    {
        name: 'Broken',
        scope: 'invalid.broken',
        settings: {
            foreground: '#FFFFFF'
        }
    },
    {
        name: 'Deprecated',
        scope: 'invalid.deprecated',
        settings: {
            foreground: '#FFFFFF'
        }
    },
    {
        name: 'Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
            foreground: '#FFFFFF'
        }
    },

    {
        name: 'parameter function',
        scope: 'function.parameter',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'parameter function js/ts',
        scope: 'function.parameter',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'brace function',
        scope: 'function.brace',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'parameter function ruby cs',
        scope: 'function.parameter.ruby, function.parameter.cs',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'constant.language.symbol.ruby',
        scope: 'constant.language.symbol.ruby',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'rgb-value',
        scope: 'rgb-value',
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'rgb value',
        scope: 'inline-color-decoration rgb-value',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'rgb value less',
        scope: 'less rgb-value',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'sass selector',
        scope: 'selector.sass',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'ts primitive/builtin types',
        scope: 'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'block scope',
        scope: 'block.scope.end,block.scope.begin',
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'cs storage type',
        scope: 'storage.type.cs',
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'cs local variable',
        scope: 'entity.name.variable.local.cs',
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        scope: 'token.info-token',
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        scope: 'token.warn-token',
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        scope: 'token.error-token',
        settings: {
            foreground: '#f44747'
        }
    },
    {
        scope: 'token.debug-token',
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'String interpolation',
        scope: [
            'punctuation.definition.template-expression.begin',
            'punctuation.definition.template-expression.end',
            'punctuation.section.embedded'
        ],
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'Reset JavaScript string interpolation expression',
        scope: [
            'meta.template.expression'
        ],
        settings: {
            foreground: '#abb2bf'
        }
    },
    {
        name: 'Import module JS',
        scope: [
            'keyword.operator.module'
        ],
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'js Flowtype',
        scope: [
            'support.type.type.flowtype'
        ],
        settings: {
            foreground: '#61AFEF'
        }
    },
    {
        name: 'js Flow',
        scope: [
            'support.type.primitive'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'js class prop',
        scope: [
            'meta.property.object'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'js func parameter',
        scope: [
            'variable.parameter.function.js'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'js template literals begin',
        scope: [
            'keyword.other.template.begin'
        ],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'js template literals end',
        scope: [
            'keyword.other.template.end'
        ],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'js template literals variable braces begin',
        scope: [
            'keyword.other.substitution.begin'
        ],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'js template literals variable braces end',
        scope: [
            'keyword.other.substitution.end'
        ],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'js operator.assignment',
        scope: [
            'keyword.operator.assignment'
        ],
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'go operator',
        scope: [
            'keyword.operator.assignment.go',
            'keyword.operator.address.go'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Go package name',
        scope: [
            'entity.name.package.go'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'elm prelude',
        scope: [
            'support.type.prelude.elm'
        ],
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'elm constant',
        scope: [
            'support.constant.elm'
        ],
        settings: {
            foreground: '#d19a66'
        }
    },
    {
        name: 'template literal',
        scope: [
            'punctuation.quasi.element'
        ],
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'html/pug (jade) escaped characters and entities',
        scope: [
            'constant.character.entity'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
        scope: [
            'entity.other.attribute-name.pseudo-element',
            'entity.other.attribute-name.pseudo-class'
        ],
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'Clojure globals',
        scope: [
            'entity.global.clojure'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'Clojure symbols',
        scope: [
            'meta.symbol.clojure'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Clojure constants',
        scope: [
            'constant.keyword.clojure'
        ],
        settings: {
            foreground: '#56b6c2'
        }
    },
    {
        name: 'CoffeeScript Function Argument',
        scope: [
            'meta.arguments.coffee',
            'variable.parameter.function.coffee'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Ini Default Text',
        scope: [
            'source.ini'
        ],
        settings: {
            foreground: '#98c379'
        }
    },
    {
        name: 'Makefile prerequisities',
        scope: [
            'meta.scope.prerequisites.makefile'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'Makefile text colour',
        scope: [
            'source.makefile'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'HLSL Semantic',
        scope: [
            'support.variable.semantic.hlsl'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    },
    {
        name: 'HLSL Types',
        scope: [
            'support.type.texture.hlsl',
            'support.type.sampler.hlsl',
            'support.type.object.hlsl',
            'support.type.object.rw.hlsl',
            'support.type.fx.hlsl',
            'support.type.object.hlsl'
        ],
        settings: {
            foreground: '#c678dd'
        }
    },
    {
        name: 'SQL Variables',
        scope: [
            'text.variable',
            'text.bracketed'
        ],
        settings: {
            foreground: '#e06c75'
        }
    },
    {
        name: 'types',
        scope: [
            'support.type.swift',
            'support.type.vb.asp'
        ],
        settings: {
            foreground: '#E5C07B'
        }
    }
]