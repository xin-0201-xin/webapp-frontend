import React from 'react'
import Link from 'next/link'
import { urlFor } from '../client'

const HeaderBanner = ({banner}) => {
  return (
    <div className='py-24 px-10 bg-[#dcdcdc] rounded-2xl relative w-full h-[500px]'>
      <div className="flex justify-center">
        <h1 className='text-white text-4xl -ml-[100px] uppercase'>{banner.largeText1}{banner.midText}</h1>
        <img src={urlFor(banner.image)} alt="" className='absolute top-0 right-1/4 h-[450px] w-[450px]'  />
        <Link href={`/product/${banner.product}`}> 
          <button className='mt-[600px] -ml-[200px] -ml-[1500px] rounded-2xl py-[10px] px-[16px] bg-[#6c7a89] text-white border-0 mt-[40px] text-3xl font-medium cursor-pointer z-[10000]'type='button'>{banner.buttonText}</button>
        </Link>
      </div>
      {/* <div> */}
        {/* <Link href={`https://google.ca`}> 
          <button className='mt-[600px] rounded-2xl py-[10px] px-[16px] bg-[#6c7a89] text-white border-0 mt-[40px] text-3xl font-medium cursor-pointer z-[10000]'type='button'>{banner.buttonText}</button>
        </Link> */}
      {/* </div> */}
    </div>
  )
}

export default HeaderBanner