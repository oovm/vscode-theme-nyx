export const arc: any = [
    {
        name: 'ARC: Table Name',
        scope: [
            'entity.other.attribute-name.dict.arc',
            'punctuation.definition.dict.arc',
            'meta.tag.dict.arc',
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#61AFEF',
        },
    },
    {
        name: 'ARC: Tuple Name',
        scope: [
            'entity.other.attribute-name.tuple.arc',
            'punctuation.definition.tuple.arc',
            'punctuation.definition.newKey.arc',
            'punctuation.definition.newData.arc',
            'meta.tag.tuple.arc',
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#F9C859',
        },
    },
    {
        name: 'ARC: Macro Name',
        scope: [
            'keyword.macro.name',
            'punctuation.definition.macro.arc',
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#C678DD',
        },
    },
    {
        name: 'ARC: Cite Path',
        scope: [
            'punctuation.definition.cite.arc',
        ],
        settings: {
            fontStyle: 'bold',
            foreground: '#56B6C2',
        },
    },
]
