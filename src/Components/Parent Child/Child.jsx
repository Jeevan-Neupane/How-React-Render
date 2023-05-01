import styled from "styled-components"


const Container=styled.div`
    
`

function Child() {
    console.log("Child Render")
  return (
    <Container>
        Child Component 
      
    </Container>
  )
}

export default Child
