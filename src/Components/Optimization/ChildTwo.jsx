import styled from "styled-components"
import React from "react"

const Container=styled.div`
    
`

function ChildTwo({name}) {
    console.log("ChildOne Render")
  return (
    <Container>
        ChildTwo Component -{name}
      
    </Container>
  )
}

export default ChildTwo

export const MemorizedChildTwo=React.memo(ChildTwo);
