"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export function Advertisement() {

    const [image, setImage] = useState('doughnut')

    
    const slideLeft = ()=>{
        const slider = document.getElementById('sliderarrow')
        slider?.scrollBy({ left: -2100, behavior: "smooth" });
    }

    const slideRight = ()=>{
        const slider = document.getElementById('sliderarrow')
        slider?.scrollBy({left: 2100, behavior: "smooth"})
    }

    useEffect(() => {
        const slider = document.getElementById("sliderarrow");
        const interval = setInterval(() => {
            if (image === "doughnut") {
                slider?.scrollBy({ left: 2100, behavior: "smooth" });
                setImage("strawberry");
            } else {
                slider?.scrollBy({ left: -2100, behavior: "smooth" });
                setImage("doughnut");
            }
        }, 3000);

        // Clear interval on cleanup to avoid multiple intervals
        return () => clearInterval(interval);
    }, [image]);

    return (
        <div className='w-full h-[300px] relative flex bg-pinkpale items-center'>
            <MdChevronLeft size={60} onClick={slideLeft} className="w-[140px] h-[200px] text-browndark opacity-50 cursor-pointer hover:opacity-100 pt-[40px]"/>
            <div id="sliderarrow" className='max-w-full h-full flex overflow-x-scroll whitespace-nowrap gap-10 scroll-smooth scrollbar-hide bg-pinkpale'>
                <Image
                    id="doughnut" 
                    src="/bannerad/doughnutad.jpg"
                    alt='doughnut'
                    width={1950}
                    height={40}
                    className='w-[2400px] p-[5px] pl-[45px] flex content-center'
                />
                <Image 
                    id="strawberry"
                    src="/bannerad/strawberrymilkshakead.jpg"
                    alt='strawberry milkshake'
                    width={1950}
                    height={40}
                    className='w-[2400px] p-[5px] pl-[45px] flex content-center pr-[55px]'
                />
            </div>
            <MdChevronRight size={60} onClick={slideRight} className="h-[200px] w-[140px] text-browndark opacity-50 cursor-pointer hover:opacity-100 pt-[40px]"/>
        </div>
    )
}
