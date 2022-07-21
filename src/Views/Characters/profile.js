import { useState, useEffect } from "react";
import { getCharacter } from "../../Services/Characters/actions";
import { useParams } from "react-router-dom";

const CharacterProfile = () =>{//Listar personajes en tarjeta
    const [character,setCharacter] = useState({})
    const params = useParams()

    const characterID = params.characterID
    useEffect(()=>{
        const getChar = async()=>{
            const personaje = await getCharacter(characterID)
            
            setCharacter(personaje)
        }

        getChar()
    },[])

    return(
        <div style={{padding:"30px",}}>
            {(character)?(<div>
                <img src={character.image}/>
                Genero: {character.gender} <br/>
                Especie: {character.species} <br/>
                Ubicación: {character?.location?.name}
            </div>):null

            }
            
        </div>
    )
}


export default CharacterProfile