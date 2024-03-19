export const SparePartCategory = {
    name: 'sparePartCategory',
    title: 'Spare Part Category',
    type: 'document',
    fields: [
        {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: Rule => Rule.required()
        }
        
    ],
    perview : {
        select:{
            title: 'title',
            subtitle: 'category.title'
        }
    }
}