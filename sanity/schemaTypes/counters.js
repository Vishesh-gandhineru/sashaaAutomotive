export const counters ={
    name: 'counters',
    title: 'Counters',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                }
              ]
        },
        {
            name: 'parts',
            title: 'Parts',
            type: 'number',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
        },
        {
            name: 'brands',
            title: 'Brands',
            type: 'number',
        },
    ],
};