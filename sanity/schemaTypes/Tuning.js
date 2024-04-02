export const Tuning = {
    title: 'Tuning',
    name: 'tuning',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [{type: 'block'}]
           
        },
        {
            title: 'Tuning Categories',
            name: 'categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tuningCategory' }] }],
        }
    ]
}
