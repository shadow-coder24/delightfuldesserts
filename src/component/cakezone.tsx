import React from "react";
import subcategorydetail from "../data/subcategory.json";
import Link from "next/link";
import Image from "next/image";

export function Cakezone() {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-1 mb-2">
      <Image 
        src="/categoryimage/cakecategory.png"
        alt="cake"
        width={90}
        height={50}
      />
      <p className="text-browndark text-center font-extrabold pt-6 text-5xl pb-5">
        CAKE ZONE
      </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-5 pl-[90px] pr-5 bg-pink-400 pt-10 pb-8">
        {subcategorydetail.subcategory_detail.slice(0, 11).map(
          (cakecategory) =>
            cakecategory.id < 12 && (
              <Link
                key={cakecategory.id}
                href={cakecategory.slug}
                className="bg-pinkpale flex flex-col gap-4 items-center pt-5 pb-4 w-[300px] h-[300px] rounded-lg"
              >
                <div key={cakecategory.id}>
                  <Image
                    key={cakecategory.id}
                    src={cakecategory.subcategoryimage}
                    alt={cakecategory.subcategoryname}
                    width={200}
                    height={200}
                  />
                </div>
                <p className="text-browndark bg-yellowmuted p-3 rounded-lg font-bold">{cakecategory.subcategoryname}</p>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
