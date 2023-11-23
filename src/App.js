// import logo from './logo.svg';
// import './App.css';
// import React,{ useState,useRef} from 'react';
// import Watch from './stopWatch';
// import ChildTwo from './ChildTwo';
// import {useState} from 'react';
// import Sindhu from './hooks';

// import { Routes } from "react-router-dom";

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
// import React,{useState}from 'react';

// const App= ()=>{
//     const [count,setCount]=useState(0)
//     const [number,setNumber]=useState(5)
//     const factorial=React.useMemo(()=>fact(number),[number])
//     const handleChange=()=>{
//         setCount(count+1)
//     }
//     return(
//         <>
//         {factorial}
//         <button onClick={handleChange}>share</button>
//         {count}
//         </>
//     )
// }
// const fact = (n)=>{
//     let answer=1;
//     for (var i=n;i>=1;i--){
//         answer=answer*i
//     }
//     console.log("factorial called")
//     return answer
// }
// export default App;

// import React, { useState,useCallback}from "react";
// import Button from "./Button";
// import Count from "./Count";

// function App(){
//     const[age,setAge]=useState(0)
//     const[salary,setSalary]=useState(7000)

//     const incrementAge=useCallback(()=>{
//         setAge(age+1)
//     },[age])
//     const incrementSalary=useCallback(()=>{
//         setSalary(salary+1000)
//     },[salary])

//     return(
//         <div className='container'>
//             <Count text={"age"} number={age}/>
//             <Button clickHandler={incrementAge}>incrementAge</Button>
//             <Count text={"salary"} number={salary}/>
//             <Button clickHandler={incrementSalary}>incrementSalary</Button>
//         </div>
//     )
// }
// export default App;

// 




// routing

import React from "react";
import{Route,Routes} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Success from "./success";
import Restaurents from "./Restaurents";
import Existing from "./Existing";
import New from "./New";
import Productsview from "./ProductsView";
import Products from "./products"
import NewForms from "./NewForms";

function App(){
return(
    <div className='container'>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/Contact' element={<Contact/>}>Contact</Route>
            <Route path='/Service' element={<Service/>}>Service</Route>
            <Route path='/About' element={<About/>}>About</Route>
            <Route path='/success' element={<Success/>}>Success</Route>
              <Route path='/Restaurents'element={<Restaurents/>}>
                <Route index element={<Existing/>}/>
                <Route path='exist' element={<Existing/>}/>
                <Route path='new' element={<New/>}/>
            </Route>
            <Route path='/Products'element={<Products/>}/>
            <Route path='/Products/:id' element={<Productsview/>}/>
            <Route path='/NewForms'element={<NewForms/>}></Route>

        </Routes>
    </div>
)
}
export default App;

// import React from 'react'
// import NewForms from './NewForms'
// const App = () => {
//   return (
//     <div>
//       <NewForms/>
//     </div>
//   )
// }

// export default App
