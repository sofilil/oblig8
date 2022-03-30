const Movie = {
    title: 'Movie',
    name: 'Movie',
    type: 'document',
    fields: [
        {
            title: 'Tittel',
            name: 'string',
            type: 'string',
            description: 'Her kan du legge til tittel',
        },
        {
          title: 'Actor',
          name: 'actor',
          type: 'reference',
          to: [{type: 'actor'},],
        },
        ],
        

    }


export default Movie;