import React,{ useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import scape from '../images/city2.jpg';
import { FcSearch } from 'react-icons/fc'

const Hero = () => {

  const [input, setInput] = useState('');
  const [holder, setHolder] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value);
    
  } 
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setHolder(' ');
      console.log(input);
    }
  }
  
  const handleClick = (e) => {
    e.preventDefault();    
    console.log(input);
    setHolder(' ');
  }

  
  return (
    <div className= 'relative h-screen w-screen flex flex-col items-center' >
        <div className='w-[100%]'>
          <Image className='absolute object-cover -z-10' src={scape} alt='pinjore' layout="fill" />
        </div>
        <div className='flex flex-col gap-20 mt-10 justify-center items-center absolute'>
          <motion.h1 initial={{scale:1.5, opacity:0}} animate={{scale:1, opacity:[1]}} transition={{duration:2}} className='z-1 text-8xl sm:text-9xl lg:text-[270px] font-bold text-white/70 mt-24 animate-pulse transition duration-5000 ease-out'>
            Pinjore
          </motion.h1>
          <div className='flex justify-between items-center'>
            <input value={input} onKeyDown={handleKeyDown} className='text-black rounded-full py-2 pl-10' onChange={handleChange} onClick={handleClick} placeholder={holder} type='text' size={45}
            />
            <FcSearch onClick={handleClick} className='absolute mx-3'/>
          </div>
        </div>
    </div>
  )
}

export default Hero