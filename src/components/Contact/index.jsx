import React from 'react';
import { contact } from '../../assets';
import { Button } from '@mui/material';

function Contact() {
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[50%] flex-col flex justify-center items-center'>
        <form action="" className='space-y-6'>
          <h2 className='poppins-bold text-2xl opacity-75 mx-2'>Get in touch</h2>
          
          <div className='border-b border-b-slate-600 p-2'>
            <input 
              type="email" 
              className='outline-none text-xl poppins-medium w-full' 
              placeholder='Enter email' 
              name='email' 
            />
          </div>
          
          <div className='border-b border-b-slate-600 p-2'>
            <textarea 
              type="text" 
              className='outline-none text-xl poppins-medium w-full resize-none h-32 overflow-hidden' 
              placeholder='Write your query/message here' 
              name='query'
              rows="5"
              cols="30"
            />
          </div>
          
          <Button variant='contained' style={{backgroundColor: '#9951DB'}}>Send Message</Button>
        </form>
      </div>
      
      <div className='w-[50%] flex justify-center items-center'>
        <img src={contact} alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
