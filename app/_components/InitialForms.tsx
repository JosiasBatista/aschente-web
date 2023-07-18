"use client";

import LoginForm from '@/components/login-form'
import RegisterForm from '@/components/register-form'
import SliderSelector from '@/components/slider-selector'
import { useState } from 'react'

const InitialForms = () => {
  const [selectedForm, setSelectedForm] = useState<string>("Login")
  
  return (
    <>
      <SliderSelector 
        selectorOptions={['Login', 'Inscrição']}
        selected={selectedForm}
        setSelected={setSelectedForm}   
      />
          
      {selectedForm === "Login" ?
        <LoginForm />
        :
        <RegisterForm />
      }
    </>
  )
}

export default InitialForms