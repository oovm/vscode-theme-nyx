import { json } from './json'
import { toml } from './toml'
import { ini } from './ini'
import { arc } from './arc'
import { regex } from './regex'

export const config = [].concat(arc, toml, json, ini, regex)
