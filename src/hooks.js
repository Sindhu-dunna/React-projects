import { useState } from "react"


function Sindhu(){
      const URL='https://jsonplaceholder.typicode.com/users'
      const [usersData,setUsersData]=useState([])
    
      const fetchUsersData=async(apiURL)=>{
        const response=await fetch(apiURL)
        const data=await response.json()
        setUsersData(data)
      }
      
      return(
        <>
        
          {
            usersData.map((eachobj)=>{
              const{name,email}=eachobj
              return(
                <li>
                  </li>
              )
            })
          }
    
        
        </>
      )
    }
    export default Sindhu;