import styled from "styled-components";
import React from "react";

const Container = styled.div``;

function ChildThree({ name, children }) {
  console.log("ChildOne Render");
  return (
    <Container>
      ChildThree Component -{children} {name}
    </Container>
  );
}

export default ChildThree;

export const MemorizedChildThree = React.memo(ChildThree);
