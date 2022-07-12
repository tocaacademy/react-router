import { useState, useEffect } from "react";
import { getEpisodes } from "../../Services/Episodes/actions";
import Episode from "../../Components/Episodes/episodes";

const Episodes = () =>{//Listar personajes en tarjeta
    const [episodes,setEpisodes] = useState([])
    useEffect(()=>{
        const getEpis = async()=>{
            const episodios = await getEpisodes()
           
            setEpisodes(episodios)
        }

        getEpis()
    },[])

    return(
        <div style={{padding:"30px", display:"flex", flexFlow: "row wrap", justifyContent:"space-between"}}>
            {
                 episodes.map(
                        (epi)=>(<Episode episode={epi}/>)
                        )  
            }
        </div>
    )
}


export default Episodes