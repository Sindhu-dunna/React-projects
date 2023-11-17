
import React from "react";
import { Usercontext } from "./App";

const ChildTwo = () => {
    return (
        <>
        <Usercontext.Consumer>
            {value => <div>{value}</div>}
        </Usercontext.Consumer>
        </>
    )
}

export default ChildTwo