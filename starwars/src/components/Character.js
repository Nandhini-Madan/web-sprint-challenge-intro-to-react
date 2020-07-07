// Write your Character component here
import React,{useEffect,useState} from "react";
import axios from "axios";
import CharacterList from "./CharacterList";


export default function Character(){
    const [Characters,SetCharacter]=useState([]);
   const number=[1,2,3];
   
    useEffect(()=>{
      
        axios
        .get(`https://swapi.dev/api/people/`)
        .then(res=>{
            console.log("Starwars",res);
            SetCharacter( res.data.results);
            
        })
        .catch(err=>{
            console.log("Error Occured",err);
        });
    
   
       
},[]);
    

    return(
    <div>
        {console.log("Character",Characters)}
     {Characters.map(chara=>{
         return(
            
        <CharacterList key={chara.id} Name={chara.name} url={chara.url} mass={chara.mass} films={chara.films}

        Gender={chara.gender} />
         );

     })}
    
    </div>);

}

