import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { createBrowserRouter, Outlet} from 'react-router-dom'
import About from '../components/About'
import UserContext from '../utils/UserContext'
import {Provider} from 'react-redux'
import appStore from '../utils/appStore'

function App() {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    //Make an api authentication
    const data = {
      name : "Rajesh Rao"
    };
    setUserName(data.name)
  },[])
  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loogedInUser: userName}}>
    <div className='w-full h-screen bg-zinc-100 '>
      <Header/>
      <Outlet/>
      <Footer/>
    


    </div>
    </UserContext.Provider>
    </Provider>
  )
}

export default App
