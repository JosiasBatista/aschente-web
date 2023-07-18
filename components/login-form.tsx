"use client";

import { FormEvent, useState } from 'react'
import Button from './button';
import { useRouter } from 'next/navigation';

interface LoginFormValues {
  email: string,
  password: string
}

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginFormValues, setLoginFormValues] = useState<LoginFormValues>({
    email: "",
    password: ""
  });
  const router = useRouter();

  const handleSubmitEvent = (e: FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault();
    setLoading(true);

    console.log(loginFormValues)
  }

  const handleFormChange = (fieldName: 'email' | 'password', value: string) => {
    const newForm = {
      ...loginFormValues,
      [fieldName]: value
    };

    setLoginFormValues(newForm);
  }

  return (
    <form className='flex flex-col w-full' onSubmit={handleSubmitEvent}>
      <input 
        type='email' 
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-4 px-4'
        placeholder='Email'
        onChange={(e) => handleFormChange('email', e.target.value)}
      />
      <input 
        type='password'
        className='h-14 rounded-md bg-red-secondary text-grey-placeholder mb-12 px-4'
        placeholder='Senha'
        onChange={(e) => handleFormChange('password', e.target.value)}
      />

      <Button
        text='Acessar'
        isLoading={loading}
        disabled={loading}
        color='red'
        onClick={() => router.push('/user/1')}
        type='submit'
      />
    </form>
  )
}

export default LoginForm