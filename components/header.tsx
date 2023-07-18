import React from 'react'
import Logo from './logo'

const Header = () => {
  return (
    <section className='flex flex-row w-screen px-[15%] h-16 
      items-center justify-between bg-red-primary'
    >
      <Logo color='white' />

      <div className='w-5'></div>
    </section>
  )
}

export default Header