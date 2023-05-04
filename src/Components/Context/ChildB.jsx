import React from 'react'
import ChildC from './ChildC'

let i=0;

function ChildB() {
    console.log("child B",i++);
  return (
    <div>
        <ChildC/>
      
    </div>
  )
}

export default ChildB
