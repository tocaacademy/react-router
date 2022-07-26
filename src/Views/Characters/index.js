import { useState, useEffect } from "react";
import { getCharacters, filterCharacters } from "../../Services/Characters/actions";
import Character from "../../Components/Characters/character";
import {
    useSearchParams,
  } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Characters = () =>{//Listar personajes en tarjeta
    const [characters,setCharacters] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoaging] = useState(false)

    const getChars = async()=>{
        const personajes = await getCharacters()
        
        setCharacters(personajes)
    }

    useEffect(()=>{ 
        getChars()
    },[])

    const filterCharactersByName= async()=>{
        setLoaging(true)
        setCharacters([])
        let name = searchParams.get("name");
        const characters = await filterCharacters(name);
        setCharacters(characters)
                
        setLoaging(false)
    }
    return(
        <>
            <Form style={{display:"flex", flexFlow:"row wrap"}}>
                <FormGroup className="col-6">
                    <Label for="name">Search by name</Label>
                    <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Write a name to search" 
                            value={searchParams.get("name") || ""}
                            onChange={(event) => {
                                let name = event.target.value;
                                if (name) {
                                    setSearchParams({ name });
                                } else {
                                    setSearchParams({});
                                    getChars()
                                }
                            }}
                            />
                    
                </FormGroup>
                <Button 
                    onClick={filterCharactersByName}
                    style={{height:40, marginTop:47, marginLeft:10}}>Search</Button>
            </Form>

            {(loading)?<h1>LOAGIND...</h1>:null}
            
            <div style={{padding:"30px", display:"flex", flexFlow: "row wrap", justifyContent:"space-between"}}>
                
                {(characters.length==0 && !loading)?<h1>No results</h1>
                    :characters.map(
                            (char)=>(<Character character={char}/>)
                            )  
                }
            </div>
        </>
    )
}


export default Characters