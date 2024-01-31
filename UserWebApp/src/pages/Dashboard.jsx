import React from 'react'
import Sidebar from './components/Sidebar';
import DashKanban from './components/DashKanban';
import PlayingBar from './components/PlayingBar';


function Dashboard() {
  return (
    <div className=" h-screen w-screen">
      <div className='flex flex-row h-full'>
        <Sidebar />
        <DashKanban />
      </div>
      <PlayingBar />
    </div>
  )
}



export default Dashboard