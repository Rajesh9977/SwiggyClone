import React, { createContext } from "react";


const UserContext = createContext({
    loogedInUser: 'defalult User'
})

export default UserContext