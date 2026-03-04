"use client"

import axios from "axios"
import { useState } from "react"

export default function Signin(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col p-6 border">
                <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)} className="mb-3 mt-3" />
                <input type="text" placeholder="password" onChange={e=>setPassword(e.target.value)} className="mb-3"/>
                <button 
                    className="bg-purple-500 mb-3"
                    onClick={()=>{axios.post("http://localhost:3000/api/v1/signin",{
                        username,
                        password
                    }

                    )}} 
                >
                    signIn
                </button>
            </div>
        </div>
    )
}