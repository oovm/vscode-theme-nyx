import { json } from './json'
import { toml } from './toml'
import { ini } from './ini'
import { markdown } from './markdown'

const markup_basic: any = [
    {
        name: 'Markup: Strong',
        scope: 'markup.bold',
        settings: {
            fontStyle: 'bold',
        },
    },
    {
        name: 'Markup: Heading',
        scope: 'markup.heading',
        settings: {
            fontStyle: 'bold',
        },
    },
]

export const config = markup_basic
    .concat(toml, json, ini, markdown)
