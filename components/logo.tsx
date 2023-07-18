import { FaChessRook } from 'react-icons/fa';

const Logo = ({ color }: { color: "red" | "white" }) => {
  return (
    <section className='flex flex-row gap-1 items-center'>
      <FaChessRook size={24} className={color === "red" ? "text-red-primary" : "text-white"} />
      <span className={color === "red" ? "text-red-primary" : "text-white"} >Aschente</span>
    </section>
  )
}

export default Logo;