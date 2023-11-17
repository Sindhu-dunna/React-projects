import { useState,useRef } from "react"
const Watch =()=>{
    const[startTime,setStartTIME]=useState(null)
    const[now,setNow]=useState(null)
    const intervalRef=useRef(null)

    function handleStart(){
        setStartTIME(Date.now())
        setNow(Date.now())
        clearInterval(intervalRef.current)
        intervalRef.current=setInterval(()=>{
            setStartTIME(Date.now())
        },10)
    }
    function stopTime(){
        clearInterval(intervalRef.current)
    }
    let secondsPassed=0;
    if(startTime !== null&& now !==null){
        secondsPassed=(startTime-now)/1000
    }
 return(
    <>
    <h4>{secondsPassed.toFixed(3)}</h4>
    <button onClick={handleStart}>startTime</button>
    <button onClick={stopTime}>stopTime</button>
    <h1>hello</h1>
    </>
 )
}
export default Watch