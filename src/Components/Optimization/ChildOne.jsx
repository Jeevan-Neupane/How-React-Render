import styled from "styled-components"


const Container=styled.div`
    
`

function ChildOne() {
    console.log("ChildOne Render")
  return (
    <Container>
        ChildOne Component 
      
    </Container>
  )
}

export default ChildOne
