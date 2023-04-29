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

function ObjectUseState() {
    const [object,setObject]=useState({
        fname:'Bruce',
        lname:'Wayne',
    })

    const changeObject=()=>{
      setObject({...object,fname:"Clark",lname:"Kent"});
    }
    console.log("Hello")
  return (
    <Container>
        <Button onClick={changeObject}>{object.fname} {object.lname}</Button>
        
      
    </Container>
  )
}

export default ObjectUseState
