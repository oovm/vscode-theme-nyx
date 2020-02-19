export * from './basic'
import { number, bool } from './number'
import {
    token,
    groovy, java,
    javascript, typescript,
    css,
    config, markup,
    php, python,
    rust, nyar,
} from './language'


export const rules: any[] = token
    .concat(number, bool)
    .concat(config, markup)
    .concat(groovy, java)
    .concat(javascript, typescript)
    .concat(css)
    .concat(php, python)
    .concat(rust, nyar)
    .sort((a, b: any) => { return ('' + a.scope).localeCompare(b.scope) })
