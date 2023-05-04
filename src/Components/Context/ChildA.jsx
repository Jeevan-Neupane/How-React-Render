import React from 'react'
import ChildB from './ChildB'

let i=0;

function ChildA() {
    console.log("child A ",i++);
  return (
    <div>
        <ChildB/>
      
    </div>
  )
}

export default React.memo(ChildA);
