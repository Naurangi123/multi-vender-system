import { useEffect, useState } from "react"
import { getUser } from "../services/apiServices"



export const useCurrentUser=()=>{
    const[user,setUser]=useState(null)

    const fetchUser=()=>{
        try {
            const data=getUser();
            setUser(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        fetchUser()
    },[])

    return {user}
}