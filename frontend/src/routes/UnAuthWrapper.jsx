import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UnAuthWrapper = (props) => {
    // @ts-ignore
    const user = useSelector((state)=>state.users.users)
    if(user) return <Navigate to="/"/> 
    else return props.children
 
}

export default UnAuthWrapper