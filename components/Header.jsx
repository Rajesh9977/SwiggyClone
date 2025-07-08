import React, { useEffect, useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus';
import UserContext from '../utils/UserContext';

function Header() {
  const [btnName, setBtnname] = useState('login')
  console.log("hearder render");

  const onlineStatus = useOnlineStatus()

  const {loogedInUser} = useContext(UserContext)


  useEffect(()=>{
    console.log('useEFfect called')
  },[])
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between py-3 border-zinc-950 px-5 bg-orange-600'>
            <img className='h-15 w-15' src='https://images.unsplash.com/photo-1653482805369-04d04aafab7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpZ2d5JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'/>
            <div className=''>
                <ul className='flex gap-4 text-white'>
                  <li>Online Status : {onlineStatus ? '✅':  '⭕️'}</li>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>AboutUs</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/Cart'>Cart</Link>
                    <li>{loogedInUser}</li>
                    <button onClick={()=>{
                       btnName==='login'? setBtnname('logout'): setBtnname('login')
                    }} className='px-2 py-1 bg-blue-300 rounded-md'>{btnName}</button>
                </ul>
            </div>

        </div>
    </div>
    
  )
}

export default Header
