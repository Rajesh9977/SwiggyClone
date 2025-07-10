import React from 'react'
import User from './User'
import UserClass from './Userclass'

function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <h2>Please find below details</h2>
      <h1>Hello All Just making changes to commit in github</h1>
      <h3>So here I have created a feature branch, basically this change will not be seen in main letsee</h3>
      <div className='flex'>
      <User name={'Rajesh Rao (function)'}/>
      <UserClass name={'Rajesh Rao (Class)'}/>
      </div>
      
    </div>
  )
}

export default About
