import { markdown } from './markdown'
import { notedown } from './notedown'

const markup_basic: any = [
    {
        name: 'Markup: Strong',
        scope: 'markup.bold',
        settings: {
            fontStyle: 'bold',
        },
    },
    {
        name: 'Markup: Italic',
        scope: 'markup.italic',
        settings: {
            fontStyle: 'italic',
        },
    },
    {
        name: 'Markup: Heading',
        scope: 'markup.heading',
        settings: {
            foreground: '#e06c75',
            fontStyle: 'bold',
        },
    },

    {
        name: 'Markup: Heading Punctuation',
        scope: 'punctuation.definition.heading',
        settings: {
            foreground: '#e06c75',
            fontStyle: 'bold',
        },
    },
]

export const markup = markup_basic
    .concat(markdown, notedown)
