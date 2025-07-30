"use client"
import React from "react";
import categorydetail from "../data/category.json";
import Image from "next/image";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export function Categorysection() {

    const slideLeft = ()=>{
        const slider = document.getElementById('slider')
        slider?.scrollBy({ left: -200, behavior: "smooth" });
    }

    const slideRight = ()=>{
        const slider = document.getElementById('slider')
        slider?.scrollBy({left: 200, behavior: "smooth"})
    }

  return (
    <div className="w-full h-[190px] flex pt-4 gap-5 relative">
      <MdChevronLeft size={60} onClick={slideLeft} className="h-[130px] text-browndark opacity-50 cursor-pointer hover:opacity-100"/>  
      <div id="slider" className="w-full h-full flex overflow-x-scroll whitespace-nowrap scroll-smooth gap-8 scrollbar-hide">
        {categorydetail.category_detail.map((category) => (
          <div
            key={category.id}
            className="w-[120px] h-[120px] flex-col gap-2 inline-block"
          >
            <Link href={`/category/${category.slug}`}>
              <div className="flex content-center bg-pinkpale rounded-full w-[100px] h-[100px] items-center justify-center hover:bg-pink-500">
                <Image
                  src={category.image}
                  alt={category.categoryname}
                  width={70}
                  height={70}
                />
              </div>
            </Link>
            <Link href={`/category/${category.slug}`}>
              <div>
                <p className="text-browndark text-center font-extrabold space-x-1 text-wrap hover:text-orange-500">
                  {category.categoryname}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <MdChevronRight size={60} onClick={slideRight} className="h-[130px] text-browndark opacity-50 cursor-pointer hover:opacity-100"/>
    </div>
  );
}
