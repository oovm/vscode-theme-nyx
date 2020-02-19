const datetime: any = [
    {
        name: 'First Class Time Type',
        scope: [
            // Override ARC
            'constant.other.time.toml',
        ],
        settings: {
            foreground: '#56B6C2',
        },
    },
    {
        name: 'First Class Data Type',
        scope: [
            // Override ARC
            'constant.other.date.toml',
        ],
        settings: {
            foreground: '#56B6C2',
        },
    },
    {
        name: 'First Class DataTime Type',
        scope: [
            // Override ARC
            'constant.other.datetime.local.toml',
            'constant.other.datetime.offset.toml',
        ],
        settings: {
            foreground: '#56B6C2',
        },
    },
]

const number: any = [
    {
        name: 'TOML: Infinity',
        scope: [
            'constant.numeric.inf.toml',
        ],
        settings: {
            foreground: '#C678DD',
        },
    },
    {
        name: 'TOML: Not a Number',
        scope: [
            'constant.numeric.nan.toml',
        ],
        settings: {
            foreground: '#C678DD',
        },
    },
    {
        name: 'TOML: Boolean',
        scope: [
            'constant.other.boolean.toml',
        ],
        settings: {
            foreground: '#C678DD',
        },
    },
]

const data: any = [
    {
        name: 'TOML: Table Name',
        scope: [
            'entity.other.attribute-name.table.toml',
        ],
        settings: {
            foreground: '#61AFEF',
        },
    },
    {
        name: 'TOML: Table Array',
        scope: [
            'entity.other.attribute-name.table.array.toml',
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#61AFEF',
        },
    },
]



export const toml = [].concat(datetime, number, data)