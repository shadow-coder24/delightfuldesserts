"use client"
import React, {useState} from 'react'

export default function ContactUs(){
    const [isSubmit, setisSubmit] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleClick = () =>{
        setisSubmit(true)

        setEmail('');
        setMessage('');
    }

    return (
        <div className='max-w-full max-h-screen flex flex-col justify-center gap-10 pt-[50px] pl-[105px] bg-pinksoft'>
            <div className='text-browndark text-2xl font-bold'>Contact Us</div>
           <div className='flex flex-col gap-4 pr-[240px]'>
                <p className='text-browndark font-semibold'>
                    Email:
                </p>
                <input className='h-[45px] bg-pinkpale rounded-lg pl-3 border-2 border-browndark text-black' 
                placeholder='Enter your email address' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
           <div className='flex flex-col gap-4 pr-[240px]'>
           <p className='text-browndark font-semibold'> 
                Your Message:
            </p>
            <textarea className='h-[90px] bg-pinkpale text-black rounded-lg pl-3 border-2 border-browndark placeholder-top-left pt-[1px]' placeholder='Enter Your Message' 
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            />
           </div>
           <div className='flex gap-5 pb-[50px]'>
                <button className='bg-yellowmuted text-browndark font-semibold p-3 pl-5 pr-5 rounded-lg'
                onClick={handleClick}>Submit</button>
                {isSubmit && (
                    <span className='pt-[10px] text-md text-browndark'>Thank You For Contacting Us! We will get back to you soon</span>
                )
                }
            </div>
        </div>
    )
}