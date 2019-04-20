import { UI,token } from '../source'
import { writeFileSync } from 'fs'
const theme_bold = {
    name: 'Nyx Bold',
    type: 'dark',
    colors: UI,
    tokenColors: token
}


writeFileSync(
    './themes/nyx-bold.json',
    JSON.stringify(theme_bold, null, 4)
)