import React from 'react'

function ChildFive({name,person,handleClick}) {
    console.log("Child Five Render");
  return (
    <div onClick={handleClick}>
      Hello {name} {person.firstName} {person.lastName}
     
    </div>
  )
}

export default ChildFive

 export const MemorizedChildFive=React.memo(ChildFive);
