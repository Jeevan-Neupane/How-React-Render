import { useState } from "react";
import styled from "styled-components";
import Parent1 from "./Parent1";
import ChildOne from "./ChildOne";

const Container = styled.div``;

const Button = styled.button`
  padding: 30px 40px;
  border: none;
  margin-bottom: 20px;
  background-color: #569DAA;
  border-radius: 20px;
  font-size: 20px;
  color:white;
  cursor: pointer;
`;

function GrandParent() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(count + 1)}>
        Grandparent Count-{count}
      </Button>
      <Parent1>
        <ChildOne newCount={count} />
      </Parent1>
    </Container>
  );
}

export default GrandParent;
