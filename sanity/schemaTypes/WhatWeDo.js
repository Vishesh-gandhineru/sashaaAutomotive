export const WhatWeDo = {
    title: "What We Do",
    name: "whatWeDo",
    type: "document",
    fields: [
        {
        title: "Title",
        name: "title",
        type: "string",
        },
        {
        title: "Reel",
        name: "reel",
        type: "array",
        of: [
            {type:"object",
            fields: [
                {
                title: "Title",
                name: "title",
                type: "string",
                },
                {
                title: "Video",
                name: "video",
                type: "file",
                },
            ],
            },            
        ],
        },
       
    ],
    preview: {
        select: {
        title: "title",
        media: "image",
        },
    },
}