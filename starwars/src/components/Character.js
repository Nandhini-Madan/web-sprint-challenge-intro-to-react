// Write your Character component here
import React,{useEffect,useState} from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import styled from "styled-components";

export default function Character(){
    const [Characters,SetCharacter]=useState([]);
   const number=[1,2,3];
   
    useEffect(()=>{
       number.forEach(num=>{
        axios
        .get(`https://swapi.dev/api/people/${num}/`)
        .then(res=>{
            console.log("Starwars",res);
            SetCharacter(Characters.res.data);
        })
        .catch(err=>{
            console.log("Error Occured",err);
        });
       })
   
       
},[]);
    

    return(<div>

        <CharacterList key={Characters.res.data.id} Name={Characters.res.data.name} url={Characters.res.data.url} mass={Characters.res.data.mass} films={Characters.res.data.films}

        Gender={Characters.gender}
         />
    
    
    </div>)

}

