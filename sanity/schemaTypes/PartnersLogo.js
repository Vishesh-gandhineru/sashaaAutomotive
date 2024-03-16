export const partnersLogo ={
    name: 'partnersLogo',
    title: 'Partners Logo',
    type: 'document',
    fields: [
        {
          name: 'gallery',
          type: 'array',
          title: 'Gallery',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },              
            },
          ],
          options: {
            layout: 'grid'
          }}]
};