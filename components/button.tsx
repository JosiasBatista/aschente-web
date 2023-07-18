
import { ButtonHTMLAttributes } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'red' | 'white',
  isLoading: boolean,
  text: string,
  loadingText?: string
}

const Button = ({ color, isLoading, text, loadingText, className, ...props }: ButtonProps) => {
  return (
    <button 
      className={
        `h-14 rounded-lg text-base disabled:opacity-60
        flex flex-row items-center justify-center gap-2
        ${color === 'red' ? 
          'bg-red-primary text-white' :
          'bg-white text-red-primary'}
        ${className}`
      }
      {...props}
    >
      {isLoading && 
        <FaSpinner 
          className={`animate-spin ${color === 'red' ? 'text-white' : 'text-red-primary'}`}
        />
      }
      <span>{isLoading ? `${loadingText || text}` : text}</span>
    </button>
  )
}

export default Button