import React from "react";
const Count=({text,number})=>{
    console.log(`${text} rendered`)
    return(
        <>
        {text},{number}
        </>
    )
}
export default React.memo(Count)