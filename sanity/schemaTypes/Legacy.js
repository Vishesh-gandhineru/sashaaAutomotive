import { blockContent } from "./blockContent";

export const Legacy ={
    name: 'legacy',
    title: 'Legacy',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                  title: 'Block',
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
                },
              ],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'order',
            title: 'order',
            type: 'number',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
        },
        prepare({ title, subtitle, media }) {
            return {
                title: title || 'Untitled',
                subtitle: subtitle || 'No subtitle',
                media,
            };
        },
    },
};