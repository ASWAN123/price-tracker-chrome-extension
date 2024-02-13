import React, { useEffect , useState } from 'react'
import { LogoIcon, SavesListIcon } from './Icons'
import toast, { Toaster } from 'react-hot-toast';



const Header = () => {

  
  const handleCopy = () => {
    let price  = document.getElementById('price').textContent
    navigator.clipboard.writeText(price)
    toast.success('Price copied! : '+ price )
  }

  return (
    <nav className='h-12 w-full border-b  px-4 flex items-center gap-2 '>
     <div className='flex items-center gap-2 text-lg'><LogoIcon  className="w-6 h-6 transform rotate-45 "/> Price Tracker
     </div>
     <SavesListIcon className="w-6 h-6   ml-auto " onClick={handleCopy} />
     
     <Toaster />
      
    </nav>
  )
}

export default Header
