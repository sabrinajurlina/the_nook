import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import {Navigate} from 'react-router-dom'

export default function LogoutView(){
    const {setUser} = useContext(AppContext)
    useEffect(
        ()=>{
            setUser({})
        },
        [setUser]
    )
    return(
        <>
        <Navigate to ="/login"/>
        </>
    )
}