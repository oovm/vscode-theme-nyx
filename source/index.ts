export * from './basic'
import { number, bool } from './number'
import {
    token,
    groovy, java,
    markup, data,
    php, python,
    rust
} from './language'


export const rules = token
    .concat(number, bool)
    .concat(markup, data)
    .sort((a, b: any) => { return ('' + a.scope).localeCompare(b.scope) })