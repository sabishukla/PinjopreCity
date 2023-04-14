import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import axios from 'axios';

const Header = () => {

  const [data, setData] = useState('');

  // useEffect(() => {
  //   axios.get(`http://api.weatherstack.com/current?access_key=22e9d1742a7f68a627de6e22ac1b3291&query=Pinjore`)
  //     .then( (res) => {
  //       setData(res.data.current.temperature)
  //       console.log(res.data.current.temperature);
  //     }).catch(err => {
  //       console.log(err);
  //     });   
  // }, [])
  
  return (
    <div className='sticky bg-indigo-600/80 text-white mx-auto px-10 flex justify-between items-center py-2'>
        <h1 className='text-3xl font-semibold'>pinjore.com</h1>
        <div>
          {/* <input value={input} className='text-black rounded-full px-3' onChange={handleChange} placeholder='enter spot...' type='text'
          />
          <button onClick={handleClick} className='bg-white text-black'>search</button> */}
          <div className='border border-white rounded-full px-5 py-1'>Temperature: 2°C</div>
        </div>
    </div>
  )
}

export default Header