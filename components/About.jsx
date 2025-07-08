import React from 'react'
import User from './User'
import UserClass from './Userclass'

function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>Please find below details</h2>
      <div className='flex'>
      <User name={'Rajesh Rao (function)'}/>
      <UserClass name={'Rajesh Rao (Class)'}/>
      </div>
      
    </div>
  )
}

export default About
