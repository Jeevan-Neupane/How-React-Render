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

function Immutable() {
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
          <Logo>Immutable State</Logo>
        </Left>
        <Right>
          <NavLink to="object" style={LinkStyle}>
            Object

         
          </NavLink>
          <NavLink to="array" style={LinkStyle}>
           Array
          </NavLink>
          <NavLink to="" style={LinkStyle}>
         
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

export default Immutable;
