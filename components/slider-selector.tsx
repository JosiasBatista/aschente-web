"use client";

import { Dispatch, SetStateAction, useState } from 'react'

interface SlideSelectorProps {
  selectorOptions: [string, string],
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>,
}

const SliderSelector = ({ selectorOptions, selected, setSelected }: SlideSelectorProps) => {
  return (
    <section className='bg-[#E8E8E8] relative w-full rounded-[20px] flex flex-row mb-6'>
      <div
        className={`h-11 w-1/2 m-[0.4em] rounded-[16px] bg-white text-red-primary 
        absolute flex items-center justify-center transition-all ease-in duration-300
        ${selected === selectorOptions[1] ? 'translate-x-[92.5%]' : null}`}
      >
        <span>{selected}</span>
      </div>
      <button 
        className=' p-4 w-1/2 text-black'
        onClick={() => setSelected(selectorOptions[0])}
      >
        {selectorOptions[0]}
      </button>
      <button 
        className=' p-4 w-1/2 text-black'
        onClick={() => setSelected(selectorOptions[1])}
      >
        {selectorOptions[1]}
      </button>
    </section>
  )
}

export default SliderSelector