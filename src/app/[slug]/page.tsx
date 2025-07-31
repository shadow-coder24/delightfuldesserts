import React from 'react'
import subcategorydata from "../../data/subcategory.json"
import { Addtocartbutton } from '@/component/addtocartbutton'

interface Image {
    url: string;
}

interface Subproduct {
    productid: number;
    productname: string;
    productdescription: string;
    productprice: number;
    productimage: Image;
    sub: Subcategory
}

interface Product {
    subcategoryid: number;
    subcategorysubpartname: string;
    subcategorysubpartslug: string;
    subcategorysubpartproducts: Subproduct;
}

interface Subcategory {
    id: number;
    slug: string;
    subcategoryname: string;
    subcategoryimage: Image;
    Products: Product;
}

export async function generateStaticParams(){
    return subcategorydata.subcategory_detail.map((subcategory)=>({
        slug: subcategory.slug
    }))
}

export default function SubcategoryPage({params}: {params: {slug: string}}) {
    
    const {slug} = params

    const subproducts = subcategorydata.subcategory_detail.find((subcategory)=>subcategory.slug===slug)

    return (
        <main className='min-w-full min-h-full bg-pinksoft flex flex-col'>
            <h2 className='text-browndark text-center pt-3 font-extrabold text-3xl pb-3 uppercase tracking-wide'>{subproducts?.subcategoryname}</h2>
            <div className='flex flex-col gap-5'>
                {subproducts?.Products.map((products, index)=>(
                    <div key={index} className='bg-yellowmuted pt-2 flex flex-col'>
                        <div className='text-browndark text-2xl pb-3 font-bold pl-4'>{products.subcategorysubpartname}</div>
                        <div className='grid grid-cols-2 gap-2 pl-2 pr-2'>
                            {products?.subcategorysubpartproducts.map((subpartproducts, i)=>(
                                <div key={i} className='bg-pinkpale flex flex-row pt-2'>
                                    <img src={subpartproducts.productimage} alt={subpartproducts.productname}
                                    style={{width: "150px", height: "150px"}} className='p-2'></img>
                                    <div className='flex flex-col gap-2 p-2 pt-1'>
                                        <div className='text-browndark h-1/3 font-semibold text-xl'>{subpartproducts.productname}</div>
                                        <div className='text-browndark h-1/3'>{subpartproducts.productdescription}</div>
                                        <div className='flex flex-row justify-between h-1/3 pb-2'>
                                            <span className='text-browndark'>₹.{subpartproducts.productprice}</span>
                                            <div className='pr-3'><Addtocartbutton product={subpartproducts} /></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </main>
    )
}
