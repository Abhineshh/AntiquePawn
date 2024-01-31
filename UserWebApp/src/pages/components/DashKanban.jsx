import React, { useState } from 'react'
import SearchBar from './SearchBar';


function DashKanban() {
  const [value,setvalue] = useState(0);
  
  function incrementvalue(){
    setvalue(va => va + 1);
  }
  const decremt = ()=>{ setvalue(va=>va - 1)}


  

  return (
    <div className='flex-1 bg-slate-700'>
      <SearchBar />
      DashKanban sddd <br></br>
     {value}
     <button onClick={incrementvalue}>ding dong</button>
     <button onClick={decremt}>dong ding</button>
      </div>
  )
}

export default DashKanban