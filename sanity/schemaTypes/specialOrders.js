export const specialOrders = {
    title: 'Special Orders',
    name: 'specialOrders',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        
        {
            title: 'Body',
            name: 'body',
            type: 'array',
            of: [{type: 'block'}]
           
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            
        },
    ]
}