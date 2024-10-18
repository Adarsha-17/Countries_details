import React, { useState } from "react";
export default function Simple() {
  const [a,b] = useState("");
  
  return (
    <>
    <div>
     {a ? <h1>very good</h1> : <h1>very bad</h1>}
     </div>
    </>
  );
}
