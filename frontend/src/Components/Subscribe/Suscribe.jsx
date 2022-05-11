import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Suscribe.css"


export default function Subscribe(){
    const usuario ={
        id:123456789,
        fistName:"John",
        lastName:"Doe",
        gmail:"sb-6qytu15277014@personal.example.com",   
    }
    const prueba = async()=>{
        const envio = await axios.post('https://localhost:3001/paypal/create-payment',{usuario})
    }
    return (
    <div  className='MasterConatiner'>
        {}
        <div className='ContainedSubscriptions'>
            <div className='Subscription Standar'>
                <h1>Standar</h1>
                <button className='button' onClick={()=>{prueba()}}>BUY</button>
            </div>
            <div className='Subscription Premium'>
                <h1>Premium</h1>
            <button className='button'>BUY</button>
            </div>
        </div>
    </div>
    )
}