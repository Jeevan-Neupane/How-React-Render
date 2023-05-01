import { useReducer } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button`
  padding: 20px 30px;
  margin-left: 30px;
  border: none;
  background-color: #569DAA;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
const Value = styled.div`
  font-size: 80px;
  font-weight: 800;
`;

const Increment = "INCREMENT";
const Decrement = "DECREMENT";
const Reset = "RESET";

let intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case Increment:
      return state + 1;

    case Decrement:
      return state - 1;

    case Reset:
      return intialState;

    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  console.log("Hello");

  return (
    <Container>
      <Value>{count}</Value>
      <Button
        onClick={() => {
          dispatch(Increment);
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch(Decrement);
        }}
      >
        Decrement
      </Button>
      <Button
        onClick={() => {
          dispatch(Reset);
        }}
      >
        Reset
      </Button>
    </Container>
  );
}

export default UseReducer;
