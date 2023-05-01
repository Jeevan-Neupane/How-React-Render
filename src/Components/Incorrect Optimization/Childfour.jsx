import React from "react";

function Childfour({ name }) {
    const date=new Date();
  console.log("child four render");
  return <div>Hello {name}.Its currently {date.getHours()} {date.getMinutes()} {date.getSeconds()}</div>;
}

export default Childfour;

export const MemorizedChildFour = React.memo(Childfour);
