import React from 'react'
import UserInfo from './UserInfo';
import b from '../../assets/b.jpg';

function Sidebar() {
  return (
    <div className='w-72'>
      <UserInfo />
      <div>
        <input type="text" placeholder='ding dong' className='flex flex-col border-2 border-slate-950' />
        <div>
          <div className='border-2 border-slate-950 h-14 p-2 flex'>
            <img src={b} className='h-8 w-8 rounded-full' />
            <p>The name of the picture</p>
            <button><img /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;