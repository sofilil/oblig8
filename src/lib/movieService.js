import client from './client';

export default function movieService() {

const movieFields = `
title,
'slug': slug.current,
actors,
'actor': actor->{slugname, "name": name.current},
movies,
_id
`

const actorFields = `
slugname,
'slug' : slugname.current,
Name,
_id,
`

const getMovie = async () => {
    const data = await client.fetch(`*[_type == "movie" ]{${movieFields}}`)
    return data
} 

const getActor = async () => {
    const data = await client.fetch(`*[_type == "actor" ]{${movieFields}}`)
    return data
} 

}
