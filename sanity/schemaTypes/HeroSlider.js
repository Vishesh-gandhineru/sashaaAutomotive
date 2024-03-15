export const heroSlider = {
    name: 'hero-slider',
    title: 'Hero Slider',
    type: 'document', 
    fields : [
        {
            name:'title',
            title: 'title',
            type : 'string'
        },
        {
            name:'carName',
            title: 'Car Name',
            type : 'string',
            validation: (Rule) => Rule.required(),
        }, 
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
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
            name: 'mobileCoverImage',
            title: 'Mobile Cover Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
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
    ]

}