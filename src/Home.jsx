import React from 'react'
import curved from './assets/curved.png'

function Home() {
  return (
    <div className="mt-12 flex justify-around">
        <div>
            <h1 className="text-4xl font-bold mt-12 text-gray-800 mr-16 leading-relaxed mb-4">Seamlessly share built and<br/> powerful AI galleries around the<br/> world</h1>
            <p className="text-xl text-gray-800 mb-16">Directly exchange one currency for another without the need for an<br/> intermediary</p>
            <form action='https://formspree.io/f/xlekdygk' method="POST">
            <input type="email" name="email" placeholder="Email Address" className="outline-none border border-2 border-white px-5 py-4 rounded-lg bg-blue-50" />
            <input type="submit" value="Join Waitlist" className="border border-2 px-8 py-4 bg-[#05acee] text-white rounded-lg border-white" />
            </form>
        </div>
        <div className="mr-20">
            <img src={curved} height={300} width={300} />
        </div>
    </div>
  )
}

export default Home