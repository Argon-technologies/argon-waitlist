import React from 'react'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import email from './assets/email.svg'
import ig from './assets/ig.svg'

function Links() {
  return (
    <div className="mt-32 flex justify-between bg-blue-500 mb-6">
        <div className="ml-12 mt-8 mb-40">
            <h1 className="text-4xl text-white font-bold mb-6">Argon Tech Inc.</h1>
            <div className="links flex">
              <a href="https://facebook.com/argon">
              <img src={facebook} className="mr-3" />
              </a>
              <a href="twitter.com/argon_ai">
              <img src={twitter} className="mr-3" />
              </a>
              <a href="instagram.com/argon">
                <img src={ig} className="mr-3" />
              </a>
              <a href="mailto:contact@argonai.co">
                <img src={email} />
              </a>
            </div>
        </div>
        <div className="mt-8">
          <h1 className="text-white text-2xl font-bold">Products</h1>
        </div>
        <div className="mt-8 mr-[200px]">
          <h1 className="text-2xl font-bold text-white mb-4">Company</h1>
          <a href="/coming-soon">
            <p className="text-xl text-white mb-4">About Us</p>
            <p className="text-xl text-white">FAQs</p>
          </a>
        </div>
    </div>
  )
}

export default Links