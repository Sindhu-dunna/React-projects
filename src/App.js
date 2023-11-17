// import logo from './logo.svg';
// import './App.css';
// import React,{ useState,useRef} from 'react';
// import Watch from './stopWatch';
// import ChildTwo from './ChildTwo';
// import {useState} from 'react';
// import Sindhu from './hooks';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a>
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   const URL='https://jsonplaceholder.typicode.com/users'
//   const [usersData,setUsersData]=useState([])

//   const fetchUsersData=async(apiURL)=>{
//     const response=await fetch(apiURL)
//     const data=await response.json()
//     setUsersData(data)
//   }
//   useEffect(()=>{
//     fetchUsersData(URL)
//   },[])
//   return(
//     <>
//     <li>
//       {
//         usersData.map((eachobj)=>{
//           const{name,email}=eachobj
//           return(
//             <li>
//               </li>
//           )
//         })
//       }

//     </li>
//     </>
//   )
// }

// export const Usercontext=React.createContext()

// function App(){
//   return(
//     <>
//     <div className='App'>
//       <Usercontext.Provider value={'coming from useContext'}>
//         <ChildTwo/>
//       </Usercontext.Provider>
//     </div>
    
//     </>
//   )
// }

// const intialisation={count:0}
// function reducer(state,action){
// switch (action.type){
//   case 'increament':
//     return{count: state.count+1}
//     case 'decreament':
//       return{count: state.count-1}
//       default:
//         throw new Error()
// }
// }

// function App(){
//   const[state,dispatch]= useReducer(reducer,intialisation)
//   return(
//     <div>
//       count:{state.count}
//       <button onClick={()=>dispatch({type:'decreament'})}>-</button>
//       <button onClick={()=>dispatch({type:'increament'})}>+</button>
//     </div>
//   )
// }



// function App(){
//   let ref =useRef(0)

//   function handlClick(){
//     ref.current=ref.current+1
//     alert("clicked" + ref.current+"times!")
//   }
//     return(
//       <div>
//         <button onClick={handlClick}>share the post</button>

        
//       </div>
//     )
//   }
import React,{useState}from 'react';

const App= ()=>{
    const [count,setCount]=useState(0)
    const [number,setNumber]=useState(5)
    const factorial=React.useMemo(()=>fact(number),[number])
    const handleChange=()=>{
        setCount(count+1)
    }
    return(
        <>
        {factorial}
        <button onClick={handleChange}>share</button>
        {count}
        </>
    )
}
const fact = (n)=>{
    let answer=1;
    for (var i=n;i>=1;i--){
        answer=answer*i
    }
    console.log("factorial called")
    return answer
}
export default App;

