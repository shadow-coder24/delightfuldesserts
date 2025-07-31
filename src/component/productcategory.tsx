"use client";
import React, { useRef } from "react";
import subcategorydata from "../data/subcategory.json";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Addtocartbutton } from "./addtocartbutton";

export function Productcategory() {
  const sliderRefs = useRef([]);

  const slideLeft = (index) => {
    const slider = sliderRefs.current[index];
    if (slider) {
      slider.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const slideRight = (index) => {
    const slider = sliderRefs.current[index];
    if (slider) {
      slider.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const getRandomProducts = (subcategoryId) => {
    const subcategory = subcategorydata.subcategory_detail.find(
      (item) => item.id === subcategoryId
    );
    if (!subcategory) return [];

    const allProducts = subcategory.Products.flatMap(
      (product) => product.subcategorysubpartproducts
    );
    return [...allProducts].sort(() => Math.random() - 0.5).slice(0, 20);
  };

  return (
    <div>
      <h1 className="text-browndark text-center font-extrabold text-3xl pt-5 pb-5">
        What Would You Like To Have?
      </h1>
      <div className="flex flex-col gap-10">
        {subcategorydata.subcategory_detail.map((subcategory, index) => (
          <div
            key={subcategory.id}
            className="bg-yellowmuted flex flex-col gap-3"
          >
            <div className="flex flex-row justify-between pr-3">
            <h2 className="text-browndark pl-5 font-extrabold space-x-2 text-2xl pt-3 uppercase bg-yellowmuted pb-3">
              {subcategory.subcategoryname}
            </h2>
            <Link href={subcategory.slug} className="bg-pinkpale text-browndark p-2 rounded-lg shadow-xl w-[100px] h-[40px] pt-2 mt-3 flex justify-center items-center font-semibold ">View More</Link>
            </div>
            <div className="relative flex items-center">
              <MdChevronLeft
                size={50}
                onClick={() => slideLeft(index)}
                className="absolute left-0 z-10 text-browndark opacity-50 cursor-pointer hover:opacity-100"
              />
              <ul
                ref={(el) => (sliderRefs.current[index] = el)}
                className="flex overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide max-w-full gap-5 pb-7"
              >
                {getRandomProducts(subcategory.id).map((product) => (
                  <li
                    key={product.productid}
                    className="bg-pinkpale min-w-[200px] min-h-[250px] flex flex-col gap-2 justify-center items-center text-wrap pt-2 pb-2 pl-2 pr-2"
                  >
                    <img
                      src={product.productimage}
                      alt={product.productname}
                      style={{ width: "150px", height: "150px" }}
                    />
                    <p className="text-browndark text-center">
                      <strong>{product.productname}</strong>
                    </p>
                    <p className="text-browndark">₹.{product.productprice}</p>
                    <Addtocartbutton product={product} />
                  </li>
                ))}
              </ul>
              <MdChevronRight
                size={50}
                onClick={() => slideRight(index)}
                className="absolute right-0 z-10 text-browndark opacity-50 cursor-pointer hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
