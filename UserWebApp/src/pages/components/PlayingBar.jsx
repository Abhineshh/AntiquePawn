import React from 'react'
import a from '../../assets/a.jpg'
function PlayingBar() {
  return (
    <div className=' h-20  fixed bottom-0 left-0 right-0 m-2 bg-red-700 p-3 flex flex-row justify-between'>
      <img src={a} alt="musix image" title='music image' className=' h-14 w-14' />
      <p>Eye of the Tiger</p>
      
    </div>
  )
}

export default PlayingBar