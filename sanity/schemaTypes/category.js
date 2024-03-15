import { defineField } from "sanity";

export const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name:'parent',
      title: 'parent' ,
      type: 'reference',
      to : [{type: 'category'}],
      options:{
        filter : '!defined(parent)'
      },
    })],
    preview : {
      select:{
        title: 'title',
        subtitle: 'parent.title'
      },
      prepare: ({title , subtitle}) => ({
        title , 
        subtitle: subtitle ? `- ${subtitle}` : '' ,
      })
    }
  
  }

   
