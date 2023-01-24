import React from 'react'
import calendar from './assets/calendar.svg'

function ComingSoon() {
  return (
    <div className="bg-[#e6ebfe]">
      <h1 className="text-center">Loading....</h1>
      <div className="w-[650px] mx-auto border border-2 px-[50px] py-[80px] rounded-3xl bg-white mt-28">
        <img src={calendar} className="mx-auto" />
        <h1 className='text-3xl text-center font-semibold mt-2 mb-2'>We are working on it...</h1>
        <p className="text-lg text-gray-800 mb-8">Just give us some time to finish working on it. For now you can join our newsletter to get information about some of our features.</p>
        <form className="flex">
          <input type="email" placeholder='Email' className="border border-2 border-black pr-32 pl-2 pt-1 pb-1 rounded-lg mr-2" />
          <input type="submit" value="Submit" name="email" className="border border-2 px-6 py-3 bg-[#687dda] text-white border-white rounded-full hover:bg-[#05acee]" />
        </form>
      </div>
      <div className="text-center mt-3">Loading...</div>
    </div>
  )
}

export default ComingSoon