import React, { useEffect, useState } from "react";


//Always check is there any input we want from caller or that componenet, if not simply write it and export
const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })

        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })
    },[]);

    return onlineStatus;

}

export default useOnlineStatus