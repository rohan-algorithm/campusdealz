import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-row gap-4 p-4'>
       <div>
         <select className="select select-success w-full max-w-xs">
           <option disabled selected>Categories</option>
           <option>One Piece</option>
           <option>Naruto</option>
           <option>Death Note</option>
           <option>Attack on Titan</option>
           <option>Bleach</option>
           <option>Fullmetal Alchemist</option>
           <option>Jojo's Bizarre Adventure</option>
         </select>
       </div>
       <div className="flex grow">
         <label className="input input-bordered flex items-center gap-2 w-full">
           <input type="text" className="grow" placeholder="Search" />
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
             <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
           </svg>
         </label>  
       </div>
       
    </div>
  )
}

export default Categories
