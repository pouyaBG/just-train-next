'use client'
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
  const handleScrool = () => { }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, or rent a car -- quickly & easily</h1>
        <p className='hero__subtitle'>Streamline your car rental exprience with out offortless booking process.</p>
        <CustomButton title="Explore Cars" containerStyle="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScrool} />
      </div>
      <div className='herro__image-container'>
        <div className='hero__image'>
          <Image src={"/hero.png"} alt='hero' fill className='object-contain' />
          <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero