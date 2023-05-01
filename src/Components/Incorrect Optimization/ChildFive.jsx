import React from 'react'

function ChildFive({name,person,handleClick,array}) {
    console.log("Child Five Render");
  return (
    <div onClick={handleClick}>
      {/* Hello {name} {person.firstName} {person.lastName} */}
      Hello {name} {array}
    </div>
  )
}

export default ChildFive

 export const MemorizedChildFive=React.memo(ChildFive);
