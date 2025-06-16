/* eslint-disable react/no-unknown-property */
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import { SiLinkedin } from 'react-icons/si'
import { BsInstagram,BsGithub } from 'react-icons/bs'

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    if(!name || !email || !message){
      toast.error("All fields are required")
      return
    }

    emailjs.sendForm('service_77r4nfn', 'template_cptojpa', form.current, 'wF9ITjZKmngwcPkZk')
      .then((result) => {
          console.log(result.text);
          toast.success("Message Send")
      }, (error) => {
          console.log(error.text);
      });

      setName('');
      setEmail('');
      setMessage('');
  };
  return (
    <>
      <div className='animate-onscroll-trigger h-full md:w-1/2'>
        <div animation-settings="animate__fadeInLeft" className='animate__onscroll p-5'>
          <h1 style={{fontFamily:'sans-serif'}} className='font-bold text-3xl lg:text-5xl'>Say Something!!</h1>
          <form ref={form} onSubmit={sendEmail}>
          <div className='w-full my-5 rounded'>
            <label htmlFor="name">Name</label>
            <input type="text" name='from_name' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} id='name' className='w-full h-10 ps-5 rounded border border-2 border-gray-300' />
          </div>
          <div className='w-full my-5 rounded'>
            <label htmlFor="email">Email</label>
            <input type="email" name='from_email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email' className='w-full h-10 ps-5 rounded border border-2 border-gray-300' />
          </div>
            <div className='w-full my-5 rounded'>
              <label htmlFor="message">Message</label>
              <textarea id='message' name='message' placeholder='Enter Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} className='w-full ps-5 rounded border-2 border-gray-300' cols="30" rows="7"></textarea>
            </div>
            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Message</button>
          </form>
        </div>
      </div>
      <div className='animate-onscroll-trigger h-full md:w-1/2 md:my-0 my-5 bg-primaryColor flex flex-col justify-center items-center rounded-lg p-5'>
        <div animation-settings="animate__fadeInRight" className='animate__onscroll flex flex-col justify-center items-center'>
          <div className='my-5'>
            <h1 style={{fontFamily:'sans-serif'}} className='font-bold text-3xl lg:text-5xl text-white'>Connect Me On!!</h1>
          </div>
          <div className='flex'>
            <a href="https://linkedin.com/in/niraj-c-s-0aa706244" target='_blank' rel="noreferrer"><SiLinkedin className='text-white text-4xl mx-3'/></a>
            <a href="https://instagram.com/niraj_c_s?igshid=MzMyNGUyNmU2YQ==" target='_blank' rel="noreferrer"><BsInstagram className='text-white text-4xl mx-3'/></a>
            <a href="https://github.com/nirajcs" target='_blank' rel="noreferrer"><BsGithub className='text-white text-4xl mx-3'/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

