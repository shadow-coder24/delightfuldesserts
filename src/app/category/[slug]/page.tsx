import React from "react";
import categorydata from "@/data/category.json";
import subcategorgydata from "@/data/subcategory.json";
import { Addtocartbutton } from "@/component/addtocartbutton";

export async function generateStaticParams() {
  return categorydata.category_detail.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const categoryproducts = Object.values(subcategorgydata.subcategory_detail).filter(
    (subproduct) => subproduct.categoryname === slug
  );

  
  const category = categorydata.category_detail.find(
    (categorypro) => categorypro.slug === slug
  );

  return (
    <main className="min-w-full min-h-full bg-pinksoft flex flex-col">
      <h2 className="text-browndark text-center pt-3 font-extrabold text-4xl pb-3 uppercase tracking-wide">
        {category?.categoryname}
      </h2>
      <div className="grid grid-cols-4 pt-3 gap-5 pb-5 pl-4 pr-4">
        {categoryproducts.map((subproduct, i)=>(
          <div key={i} className="bg-yellowmuted p-4 text-browndark rounded-lg text-center font-semibold">
            <a href={`#${subproduct.subcategoryname}`}>{subproduct.subcategoryname}</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-yellowmuted pt-2 flex flex-col">
          <div className="flex flex-col gap-5">
          {categoryproducts.map((subproduct, index) => (
  <div key={index} className="bg-yellowmuted pt-2 flex flex-col">
    <div id={subproduct.subcategoryname} className="text-browndark text-3xl pb-3 font-bold shadow-lg pl-4 bg-pink-400 text-center pt-3">
      {subproduct.subcategoryname}
    </div>
    <div className="flex flex-col gap-5">
      {subproduct.Products.map((products, prodIndex) => (
        <div key={prodIndex} className="bg-yellowmuted pt-2 flex flex-col">
          <div className="text-browndark text-2xl pb-3 font-bold pl-4">
            {products.subcategorysubpartname}
          </div>
          <div className="grid grid-cols-2 gap-2 pl-2 pr-2">
            {products.subcategorysubpartproducts.map(
              (subpartproducts, i) => (
                <div key={i} className="bg-pinkpale flex flex-row pt-2">
                  <img
                    src={`/${subpartproducts.productimage}`}
                    alt={subpartproducts.productname}
                    style={{ width: "150px", height: "150px" }}
                    className="p-2"
                  ></img>
                  <div className="flex flex-col gap-2 p-2 pt-1">
                    <div className="text-browndark h-1/3 font-semibold text-xl">
                      {subpartproducts.productname}
                    </div>
                    <div className="text-browndark h-1/3">
                      {subpartproducts.productdescription}
                    </div>
                    <div className="flex flex-row justify-between h-1/3 pb-2">
                      <span className="text-browndark">
                        ₹.{subpartproducts.productprice}
                      </span>
                      <div className="pr-3">
                        <Addtocartbutton product={subpartproducts} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
    ))}
    </div>
    </div>
))}
      </div>
      </div>
      </div>
    </main>
  );
}
