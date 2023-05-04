import { useContext } from "react";
import { CountContext } from "./ContextParent";

let i=0;

function ChildC() {

    const count=useContext(CountContext)
    console.log("child C",i++);
  return (
    <div>
        {count}

      
    </div>
  )
}

export default ChildC
