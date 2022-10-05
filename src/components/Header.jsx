import Image from 'next/image'
import React from 'react'

export function Header() {
  return (
    <section id='header' className='flex justify-between items-center mb-24'>
      <div id='message' className="">
        <h1 className="">Hello world</h1>
        <h2 className=''>Carteira</h2>
      </div>
      <div id='avatar' className="w-[4.8rem] h-[4.8rem] relative cursor-pointer">
        <Image src="/claudio-lins.jpg" alt="Picture of the author" layout='fill' loading='lazy' className=' rounded-2xl' />
      </div>
    </section>
  )
}
