export const SpareParts = {
    title: 'Spare parts',
    name: 'spareParts',
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
            title: 'Spare Parts Categories',
            name: 'categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'sparePartCategory' }] }],
        }
    ]
}
