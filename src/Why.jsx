import React from 'react'
import star from './assets/star.svg'
import trop from './assets/trop.svg'
import file from './assets/file.svg'
import secure from './assets/secure.svg'
import globe from './assets/globe.svg'
import './Why.css'

function Why() {
  return (
    <div className="mt-12 ml-4">
        <div className="flex">
            <img src={star} className="h-8 ml-8 mr-4 mt-4" />
            <h2 className="text-2xl text-[#05acee]">Best AI Platform</h2>
        </div>
          <h1 className="text-4xl ml-20 font-bold text-gray-800">Why Choose Us</h1>
        <div className="flex">
            <div className="flex ml-40 mt-4 mr-20">
                <img src={trop} className="mr-20" height={60} width={60} />
                <div className="mt-8">
                <h1 className="text-3xl text-gray-800 font-bold">Grow your audience</h1>
                <p className="text-lg text-gray-800">Grow your audience easily with our<br/> powerful AI platform that connects<br/> you to other AI creators.</p>
                </div>
            </div>
            <div className="flex felin">
                <img src={file} height={60} width={60} className="mr-20" />
                <div className="mt-10">
                <h1 className="text-3xl text-gray-800 font-bold">Share art galleries</h1>
                <p className="text-lg text-gray-800">Share your AI generate content with our<br/> powerful AI platform that connects<br/> you to other AI creators.</p>
                </div>
            </div>
        </div>
        <div className="flex mt-6">
            <div className="ml-40 flex mr-14">
                <img src={secure} height={60} width={60} className="mr-20" />
                <div className="mt-10">
                <h1 className="text-3xl text-gray-800 font-bold">Secured AI Platform</h1>
                <p className="text-lg text-gray-800">Share your AI generate content with our<br/> powerful AI platform that connects<br/> you to other AI creators.</p>
                </div>
            </div>
            <div className="flex felin">
                <img src={globe} height={60} width={60} className="mr-20" />
                <div className="mt-10">
                <h1 className="text-3xl text-gray-800 font-bold">Social media integration</h1>
                <p className="text-lg text-gray-800">Share your AI generate content to most<br/> of the popular social media in the world<br/> and build friends from here.</p>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Why