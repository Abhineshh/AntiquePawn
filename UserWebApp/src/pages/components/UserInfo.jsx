import React from 'react'
import logo from '../../assets/a.jpg';//just for ui purposes

function UserInfo() {
  return (
    <div className=' h-20 bg-red-700 p-2 flex'>
      <img src={logo} alt="" className='h-16 rounded-full w-16 mr-6' />
      <div>
        <p>The Name of the User</p>
        <div className='flex flex-row-reverse'>
          <button className='border-2 w-12 bg-slate-800 text-white'>...</button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo