import Image from 'next/image';

import Rocket from '@/public/amico.svg';
import Logo from '@/components/logo';
import InitialForms from './_components/InitialForms';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center">
      <section className='w-[35vw] h-screen bg-red-primary flex flex-col items-center justify-center'>
        <span className=' text-white text-lg'>Qual será o seu próximo</span>
        <strong  className=' text-white text-5xl'>DESAFIO?</strong>

        <Image
          src={Rocket}
          width={400}
          height={430}
          alt='Rocket launch image'
          className='mt-[76px]'
        />
      </section>

      <section className=' w-[65vw] h-screen flex flex-col items-center justify-between p-2'>
        <Logo color="red" />

        <div className='flex flex-col items-center'>
          <strong  className='text-5xl'>Seja bem vindo!</strong>
          <span className='text-lg mb-6'>Insira suas informações</span>
        
          <InitialForms />
        </div>

        <p className=' max-w-[50%] text-center text-grey-placeholder'>
          Junte-se a várias pessoas nessa jornada para desenvolver a sua 
          disciplina e conquistar todos os desafios!
        </p>

      </section>
    </main>
  )
}
