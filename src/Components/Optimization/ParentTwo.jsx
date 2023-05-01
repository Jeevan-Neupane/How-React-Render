import {  useState } from "react";
import styled from "styled-components";
import {MemorizedChildTwo} from "./ChildTwo";
import ChildTwo from "./ChildTwo";



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

function ParentTwo({children}) {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("John")


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
        
        <MemorizedChildTwo name={name}/>
      </Imp>
     
   
    </Main>
  );
}

export default ParentTwo;
