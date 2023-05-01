import {  useState } from "react";
import styled from "styled-components";
import { MemorizedChildFive } from "./ChildFive";



const Button = styled.button`
 
  background-color: #569DAA;
  border:none;
  margin-right:20px;
  padding: 30px 40px;
  font-size:20px;
  color:white;
  cursor: pointer;
  border-radius: 20px;
  
`;

const Imp=styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`
const Main = styled.main``;

function ParentFour({children}) {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("John");

  const Person={
    firstName:"Bruce",
    lastName:"Wayne",
  }
const array=[1,2,3,4,5]
  const handleClick=()=>{
    console.log("I am clicked");
  }


  console.log("I am Rendering from ParentTwo")

  const handleCount = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <Main>
      <Button onClick={handleCount}>{count}</Button>
      <Button onClick={()=>setName("Jenny")}>Change Name-{name}</Button>
     
      <Imp>
        
        {/* <MemorizedChildThree name={name}>
            <strong>Hello</strong>//&This cause the render of child also after wrap in the react.memo
        </MemorizedChildThree> */}

        {/* <MemorizedChildFive name={name} person={Person}/> */}
        {/* <MemorizedChildFive name={name} handleClick={handleClick}/> */}
        <MemorizedChildFive name={name} array={array}/>
      </Imp>
     
   
    </Main>
  );
}

export default ParentFour;
