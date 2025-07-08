import React, { useState } from 'react'

const User = ({name}) =>{
    const [count, setCount] = useState(0)
    return(
        <div className='user-card bg-zinc-500 w-53 m-5 text-zinc-300 h-60 flex flex-col justify-center items-center'>
            <img className='bg-zinc-400 w-40 h-30' src=''/>
            <h1>count : {count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <h2>Name : {name}</h2>
            <h2>Location : Jabalpur</h2>
            <h3>Contact : Rajesh@gmail.com</h3>

        </div>
    )
}

export default User;