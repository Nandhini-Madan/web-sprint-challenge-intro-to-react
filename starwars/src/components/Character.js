// Write your Character component here
import React,{useEffect,useState} from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

export default function Character(){
    const [Characters,SetCharacter]=useState([]);
    useEffect(()=>{
    axios
    .get('https://swapi.dev/api/people/1/')
    .then(res=>{
        console.log("Starwars",res);
        SetCharacter(res.data);
    })
    .catch(err=>{
        console.log("Error Occured",err);
    });
},[]);

    return(<div>
        <CharacterList key={Characters.id} Name={Characters.name}/>
    </div>)

}

