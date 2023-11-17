import { Usercontext } from "./App";
import React from "react"

const Childtwo=()=>{
    return(
<div>
   <Usercontext.Consumer>
    {value=><div>{value}</div>}
    </Usercontext.Consumer> 
</div>
    )
}
export default Childtwo