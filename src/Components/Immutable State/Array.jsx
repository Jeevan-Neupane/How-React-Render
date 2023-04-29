

import { useState } from "react";
import styled from "styled-components";



const Container=styled.div`
    

`
const Button=styled.button`
padding: 20px 30px;
font-size:20px;
background-color: #569DAA;
border:none;
border-radius: 20px;
color:white;
cursor: pointer;
    
`

const List=styled.li`
font-size: 20px;
list-style:number;
margin-top: 10px;
font-weight: 500;
    
`

const initState=['Bruce','Wayne'];


function ArrayUseState() {
    const [persons,setPersons]=useState(initState);

    


    const changeArray=()=>{
      const NewArray=[...persons];
      NewArray.push("Clark");
      NewArray.push("Kent");
      setPersons(NewArray);

    }
   console.log("Array Render")
  return (
    <Container>
        <Button onClick={changeArray}>Click</Button>
        {
            persons.map((person)=>{
                return (
                    <List key={person}>{person}</List>

                )
            })
        }
        
      
    </Container>
  )
}

export default ArrayUseState;
