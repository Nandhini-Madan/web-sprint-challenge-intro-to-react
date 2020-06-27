import React from "react";
import styled from "styled-components";

//styled components
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue`;
const Pag=styled.p`
font-size: 1.0em;
text-align: center;
color: orange`;

const CharacterList=({Name,url,mass,films,Gender})=>{
    //console.log(films);

    return(
        <div>
            <Title>Name: {Name}</Title>
            <Pag>Mass: {mass}</Pag>
            <p>URL: {url}</p>
            <p>Gender:{Gender} </p>
            
        </div>
    )
}
export default CharacterList;