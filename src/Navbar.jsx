import React from 'react'
import { useState } from 'react'
import curved from './assets/argon.png'

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className='mt-3 ml-16'>
        <img src={curved} />
      </div>
      <div className="flex mt-8">
        <li className="list-none mr-10 text-gray-500"><a href="#">Products</a></li>
        <li className='list-none mr-10 text-gray-500'><a href="#">About Us</a></li>
        <li className='list-none text-gray-500'><a href="#">FAQs</a></li>
      </div>
      <div className="mt-6 mr-[150px]">
        <a href="#join"><button className="border border-2 px-5 py-3 rounded-lg border-white bg-[#05acee] text-white">Join Waitlist</button></a>
      </div>
    </div>
  )
}

export default Navbar