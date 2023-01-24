import React from 'react'

function List() {
  return (
    <div className="mt-24" id="join">
        <div className="text-center mb-24">
            <h1 className="text-5xl font-bold text-gray-800">Be Part of the Movement. Join Us!</h1>
        </div>
        <form action='https://formspree.io/f/xlekdygk' method="POST" className="text-center">
            <input type="email" name="email" placeholder="Email Address" className="outline-none border border-2 border-white px-5 py-5 rounded-lg bg-blue-50" />
            <input type="submit" value="Join Waitlist" className="border border-2 px-8 py-5 bg-[#05acee] text-white rounded-lg border-white" />
        </form>
    </div>
  )
}

export default List