"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import cartContext from "@/context/cartcontext";

export function Navbar() {
  const { totalQuantity } = useContext(cartContext);

  return (
    <div className="flex">
      <div className="w-[110px] pl-[15px] pt-[5px]">
        <Image
          src="/logoimage/logo.png"
          alt="logo"
          width={80}
          height={80}
        ></Image>
      </div>
      <div className="flex flex-col pt-[7px] pl-[10px]">
        <p className="text-pink-600 font-extrabold text-lg font-serif italic">
          DELIGHTFUL
        </p>
        <p className="text-browndark font-extrabold text-xl font-serif italic">
          DESSERTS
        </p>
      </div>
      <div className="pl-[200px] pt-5 flex gap-12">
        <div className="w-[80px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[6px] cursor-pointer">
          <Link href="/" className="text-browndark font-bold">
            Home
          </Link>
        </div>
        <div className="group h-auto relative z-20">
          <button className="w-[80px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[4px] cursor-pointer text-browndark font-bold group-hover:bg-pink-500 opacity-100 z-20">
            Cake
          </button>
          <div className="flex absolute mt-2 left-0 max-h-0 group-hover:max-h-[500px] group-hover:flex overflow-hidden w-[250px] bg-pinkpale text-center flex-col rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md transition-[max-height] duration-500 ease-in-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]">
            <Link
              href="/layercake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Layer Cake
            </Link>
            <Link
              href="/spongecake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Sponge Cake
            </Link>
            <Link
              href="/cheesecake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Cheese Cake
            </Link>
            <Link
              href="/cupcake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Cup Cake
            </Link>
            <Link
              href="/fruitcake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Fruit Cake
            </Link>
            <Link
              href="/specialitycake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Speciality Cake
            </Link>
            <Link
              href="/icecreamcake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Icecream Cake
            </Link>
            <Link
              href="/moussecake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Mousse Cake
            </Link>
            <Link
              href="/frostingandglazedcake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Frosting & Glazed Cake
            </Link>
            <Link
              href="/rollcake"
              className="text-browndark h-[40px] font-bold hover:bg-pink-400 pt-[8px]"
            >
              Roll Cake
            </Link>
            <Link
              href="/nutcake"
              className="text-browndark h-[40px]  font-bold hover:bg-pink-400 pt-[8px]"
            >
              Nut Cake
            </Link>
          </div>
        </div>
        <div className="group h-auto relative z-20">
          <button className="w-[80px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[4px] cursor-pointer text-browndark font-bold group-hover:bg-pink-500">
            Pastry
          </button>
          <div className="flex absolute mt-2 left-0 max-h-0 group-hover:max-h-[500px] group-hover:flex overflow-hidden w-[250px] bg-pinkpale text-center flex-col rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md transition-[max-height] duration-500 ease-in-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]">
            <Link
              href="/flavoredpastry"
              className="text-browndark h-[40px]  font-bold hover:bg-pink-400 pt-[8px]"
            >
              Flavoured Pastry
            </Link>
            <Link
              href="/eclairpastry"
              className="text-browndark h-[40px]  font-bold hover:bg-pink-400 pt-[8px]"
            >
              Eclair Pastry
            </Link>
          </div>
        </div>
        <div className="w-[80px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[6px] cursor-pointer hover:bg-pink-500">
          <Link href="/pizza" className="text-browndark font-bold">
            Pizza
          </Link>
        </div>
        <div className="w-[80px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[6px] cursor-pointer hover:bg-pink-500">
          <Link href="/muffins" className="text-browndark font-bold">
            Muffins
          </Link>
        </div>
        <div className="w-[105px] h-[35px] text-center bg-yellowmuted rounded-lg pt-[6px] cursor-pointer hover:bg-pink-500">
          <Link href="/doughnuts" className="text-browndark font-bold">
            Doughnuts
          </Link>
        </div>
        <div className="relative flex flex-col items-center w-[60px] h-[50px]">
          <Link href="/cart">
            <span>
              <span
                className="absolute -top-2 text-browndark rounded-full text-center bg-yellowmuted w-7 h-7 font-bold flex items-center justify-center -right-[2px]"
                style={{ zIndex: 10 }}
              >
                {totalQuantity()}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                id="shopping-cart"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
