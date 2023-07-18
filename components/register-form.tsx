"use client";

import { FormEvent, useState } from 'react'
import Button from './button';

interface RegisterFormValues {
  email: string,
  password: string,
  passwordConfirm: string,
  username: string,
}

type FormFields = 'email' | 'password' | 'passwordConfirm' | 'username'

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [registerFormValues, setRegisterFormValues] = useState<RegisterFormValues>({
    email: "",
    password: "",
    passwordConfirm: "",
    username: ""
  })

  const handleSubmitEvent = (e: FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    setLoading(true);

    console.log(registerFormValues)
  }

  const handleFormChange = (fieldName: FormFields, value: string) => {
    const newForm = {
      ...registerFormValues,
      [fieldName]: value
    };

    setRegisterFormValues(newForm);
  }

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmitEvent}>
      <input 
        type='text' 
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-4 px-4'
        placeholder='Email'
        onChange={(e) => handleFormChange('email', e.target.value)}
      />
      <input 
        type='password'
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-4 px-4'
        placeholder='Senha'
        onChange={(e) => handleFormChange('passwordConfirm', e.target.value)}
      />
      <input 
        type='password'
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-4 px-4'
        placeholder='Confirmação de Senha'
        onChange={(e) => handleFormChange('password', e.target.value)}
      />
      <input 
        type='text'
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-12 px-4'
        placeholder='Nome de Usuário'
        onChange={(e) => handleFormChange('username', e.target.value)}
      />

      <Button
        text='Criar'
        loadingText='Criando'
        isLoading={loading}
        disabled={loading}
        color='red'
        type='submit'
      />
    </form>
  )
}

export default RegisterForm