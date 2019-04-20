export * from './basic'
import {
    token,
    groovy, java,
    markdown,
    php, python,
    rust
} from "./language";


export const rules = token
    .concat(markdown)
    .concat(rust)
    .concat(java, groovy)
    .concat(php, python)

