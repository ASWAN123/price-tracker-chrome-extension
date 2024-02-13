import React, { useState } from 'react'

const Profiler = () => {
    const  [ date ,  setDate ] = useState(new Date().toDateString())
  return (
    <div>
      <p className='text-[12px]'>{date}</p>
    </div>
  )
}

export default Profiler
