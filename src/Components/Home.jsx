import React from 'react'
import Image from '../assets/Image.png'

function Home() {
  return (
    <div>
        <div className='grid grid-cols-2 ml-16'>
            <div>
                <p className='text-[70px] mt-12 font-bold'>Make</p>
                <p className='text-[70px] mt-[-45px] font-bold'>remote work</p>
                <p className='mt-9 text-[27px]'>Get your team in sync,no matter your location. Streamline processes,create team rituals,and watch productivity soar.</p>
                <button className='bg-black text-white p-2 rounded-md hover:bg-gray-50 hover:text-black mt-9'>Learn more</button>
            </div>
            <div>
                <img src={Image} className='mt-12 ml-44' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home