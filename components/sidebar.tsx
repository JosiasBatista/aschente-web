import React from 'react'
import Button from './button'

const Sidebar = () => {
  return (
    <section className=' w-[22.5%] h-[calc(100vh-4rem)] flex flex-col items-start justify-between border-r py-4'>
      <div className='flex flex-row gap-2 mb-10'>
        <div className=' w-14 h-14 rounded-full bg-gray-800' />
      
        <div className='flex flex-col'>
          <strong className=' text-red-primary font-medium mb-1 text-xl'>josiasabraao</strong>
          <span className=' text-grey-placeholder font-medium mb-1'>2 completados</span>
        </div>
      </div>

      <strong className=' text-red-primary text-4xl max-w-[80%] pb-52'>It's not about being invicible... It's about being unstoppable.</strong>

      <div className=' w-full flex justify-center items-center'>
        <Button color='red' text='Sair' isLoading={false}
          className=' w-[85%]'
        />
      </div>
    </section>
  )
}

export default Sidebar