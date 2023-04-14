import React from 'react';
import Image from 'next/image';
import garden from '../images/Mughal_Gardens_Pinjore.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='h-screen flex gap-5'>
      <div className='fixed w-[500px] flex flex-col border-r border-black '>
        <h1>Info</h1>
        <h1>History</h1>
        <h1>Travel</h1>
        <h1>Ecology</h1>
        <h1>QnA</h1>
      </div>
      <div className='container mx-auto h-screen flex flex-col text-center gap-10'>
          <h1 className='uppercase text-2xl tracking-[20px] my-28'>about</h1>
          <div className='flex flex-col gap-10 justify-center items-center lg:px-20 '>
              <motion.div initial={{x:-300}} whileInView={{x:0}} transition={{duration: 1}} >
                  <Image className='w-[300px] h-[200px] lg:w-[600px] lg:h-[300px] object-cover' src={garden} alt='/' />
              </motion.div>
              <p className='text-base lg:text-xl'>Pinjore is a town in Panchkula district in the Indian state of Haryana. This residential township, 
               located close to Panchkula, Chandigarh, is set over 1,800 feet above the sea level in a valley, overlooking the Sivalik Hills. 
               Pinjore is known for Pinjore Gardens, Asia best 17th Century Mughal garden,
               and the Hindustan Machine Tools (HMT) factory. [History] The town is named after the five Pandava brothers from Mahabharta, who during the time of their exile had stayed here for some time, hence the name Panchpura which later got corrupted to its current form, Pinjore.</p>
          </div>
      </div>
    </div>
  )
}

export default About