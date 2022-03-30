const Actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            title: 'Full Name',
            name: 'string',
            type: 'string',
        },
        {
            title: 'Name',
            name: 'slug',
            type: 'slug',
            options: {source: 'title',
            slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            
            validation: (Rule) => Rule.required(),
        },
    ],
}

export default Actor;