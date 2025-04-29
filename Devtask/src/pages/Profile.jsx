import React from 'react'
import ProfileImg from '../assets/Ellipse 114.png'
import cameraIcon from '../assets/Group 1585.svg' 

export default function Profile() {
  return (
    <div className=' bg-[#F7F8F9] h-[812px] w-[375px]  ' >
        <h1 className='capitalize text-[#1D2226] font-normal bg-white  shadow-xs h-[68px] py-6 px-4'>
        Account Settings
        </h1>
        <div className='border-b-2 border-b-[#CBCBCB] border-dashed p-6'>
            <div className='flex items-center gap-5 mb-6'>
            <div className='relative'>
                <img src={ProfileImg} alt="Profile Image" />
                <div className='absolute right-0 bottom-[6%]'>
                    <img src={cameraIcon} alt="camera symbol" />
                </div>
            </div>
            <div>
            <h3 className='font-medium text-sm capitalize'>Marry Doe</h3>
            <p className='font-normal text-xs capitalize'>Marry@Gmail.Com</p>
            </div>
            </div>

            <p className='text-[#1D2226] capitalize font-normal text-xs'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
    </div>
  )
}
