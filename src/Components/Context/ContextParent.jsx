import { createContext, useState } from "react"
import styled from "styled-components";
import ChildA from "./ChildA";

export const CountContext=createContext();

let i=0;


const Button = styled.button`
  padding: 20px 30px;
  border:none;
  background-color: #569DAA;
  cursor: pointer;
  color:white;
  border-radius: 20px;
  width:100px;
  margin-right: 20px;
  
`;


function ContextParent() {
    const [count, setCount] = useState(0);


    const handleCount=()=>{
        setCount(count+1);
    }

    console.log("Parent Component Rerender ",i++);

  return (
    <div>
         <Button onClick={handleCount}>{count}</Button>

         <CountContext.Provider value={count}>
            <ChildA/>
         </CountContext.Provider>
    
      
    </div>
  )
}


export default ContextParent;

