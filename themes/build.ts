import { UI, rules } from '../source'
import { writeFileSync } from 'fs'




const theme_bold = {
    name: 'Nyx Bold',
    type: 'dark',
    colors: UI,
    tokenColors: rules,
}


function check_rule(dict: any) {
    

}
console.log(rules[1]);


writeFileSync(
    './themes/nyx-bold.json',
    JSON.stringify(theme_bold, null, 4),
)
