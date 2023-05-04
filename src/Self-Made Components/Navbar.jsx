import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavTop = styled.div`
  background-color: #577d86;
  padding: 10px 5%;
  `;

const Body=styled.div`


`

const OuletDoor=styled.div`
padding: 10px 5%;
  
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div``;
const Logo = styled.h1``;
const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`;

function Navbar() {
  const LinkStyle = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "500",
      color: "black",
      textDecoration: "none",
      fontSize: "20px",
    };
  };
  return (
    <Body>
    <NavTop>
      <Nav>
        <Left>
          <Logo>React Render</Logo>
        </Left>
        <Right>
          <NavLink to="/" style={LinkStyle}>
            Home
          </NavLink>
          <NavLink to="use-state" style={LinkStyle}>
            useState
          </NavLink>
          <NavLink to="use-reducer" style={LinkStyle}>
            useReducer
          </NavLink>
          <NavLink to="immutable-state" style={LinkStyle}>
            Immutable State
          </NavLink>
          <NavLink to="child-parent" style={LinkStyle}>
            Child Parent
          </NavLink>
          <NavLink to="optimization" style={LinkStyle}>
           Optimization
          </NavLink>
          <NavLink to="context" style={LinkStyle}>
           Context
          </NavLink>

        </Right>
      </Nav>
    </NavTop>
      <OuletDoor>
        <Outlet/>
      </OuletDoor>
    </Body>
  );
}

export default Navbar;
