/** @type LanguageFn */
export default function (hljs: any) {
    const COMMENT = {
        className: 'comment',
        begin: '^#', end: '$',
    };

    return {
        name: 'Editor',
        aliases: ['editor'],
        keywords: {
            built_in: []
        },
        contains: [
            COMMENT
        ]
    };
}