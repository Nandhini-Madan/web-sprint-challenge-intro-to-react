import React from "react";
import styled from "styled-components";
import Character from "./Character";

//styled components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue`;

const Pag=styled.p`
font-size: 1.0em;
text-align: center;
color: green`;

const Film=styled.p`
font-size:1.0em;
color:red`;

const Border=styled.div`
border: 4px dotted blue`;




const CharacterList=({Name,url,mass,films,Gender})=>{
    console.log("Films",films);
    console.log("Name1",Name);

    return(
        
        <Border>
            <Title>Name: {Name}</Title>
            <Pag>Mass: {mass}</Pag>
            <Pag>URL: {url}</Pag>
            <p>Gender:{Gender} </p>
            <Film>Films</Film>
            {films.map(film=>(
                <p>{film}</p>
            ))}
         
            
        </Border>
    )
}
export default CharacterList;