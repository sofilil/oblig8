import { useEffect, useState } from 'react';
import getActor from './lib/movieService';


export default function Movie () {

    const [actor, setActor] = useState([])

    const getData = async () => {
        const actor = await getActor([])
        setActor(actor)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h1>Actor</h1>
            {actor.map((actor) => ( <h1 key={actor._id}>{actor.name.current}</h1>
            ))}
        </>
    )
}
