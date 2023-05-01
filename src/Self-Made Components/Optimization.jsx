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

function Optimization() {
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
          <Logo>Optimization</Logo>
        </Left>
        <Right>
          <NavLink to="prop-pass" style={LinkStyle}>
            Prop Pass

         
          </NavLink>
          <NavLink to="react-memo" style={LinkStyle}>
            React Memo
        
          </NavLink>
          <NavLink to="incorrect-optmization" style={LinkStyle}>
            Incorrect Optimization
         
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

export default Optimization;
