import axios from 'axios'

export const getEpisodes= async()=>{
    const episodes = await axios.get("https://rickandmortyapi.com/api/episode")
    
    return episodes.data.results
}

export const getCharacters= async(ids)=>{
    const characters = await axios
                            .get(`https://rickandmortyapi.com/api/character/${ids}`)

    return characters.data
}