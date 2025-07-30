import Link from 'next/link'
import React from 'react'

export function Footer() {
    

    return (
        <div className='bg-slate-900 min-w-full h-[170px]'>
            <div className='flex flex-row gap-7 pl-10 text-sm pt-2'>
            <div className='flex flex-col gap-4 pt-5'>
                <Link href="/aboutus">About Us</Link>
                <Link href="/contactus">Contact Us</Link>
            </div>
            <div className='flex flex-col gap-4 pl-4 pt-5'>
                <Link href="/termsandconditions">Terms & Conditions</Link>
                <Link href="/privacypolicy">Privacy Policy</Link>
            </div>
            <div className='text-xs pl-[750px] pt-9'>This website is completely hypothetical.<br/>All the info present on website <br/> is genterated using AI tools</div>
            </div>
            <div className='text-sm text-center pt-[50px]'>©2024 Delightful Desserts. All Rights Reserved</div>
        </div>
    )
}
