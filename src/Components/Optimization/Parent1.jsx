import {  useState } from "react";
import styled from "styled-components";



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

const Imp=styled.li`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
`
const Main = styled.main``;

function Parent1({children}) {
  const [count, setCount] = useState(0);


  console.log("I am Rendering from Parent")

  const handleCount = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <Main>
      <Button onClick={handleCount}>{count}</Button>
     
      <Imp>
        {children}
      </Imp>
     
   
    </Main>
  );
}

export default Parent1;
