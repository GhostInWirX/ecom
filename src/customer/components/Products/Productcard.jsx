import React from 'react';
import "./Productcard.css"
const ProductCard=()=>{
    return(
        <div className="productCard w-[12rem] m-3 transition-all cursor-point">
            <div className='h-[18rem]'>
                <img className="h-full w-full object-cover object-left-top" src="https://t3.ftcdn.net/jpg/04/33/68/84/360_F_433688443_15MjJmYAGLrEbymhwRUkX2HtOnb95rdw.webp" alt=""/>
            </div>
            <div className='textPart bg-white-p4'>
                <div>
                    <p className="font-bold opacity-60">Coat</p>
                    <p>This Is The Best Coat </p>
                </div>
            <div className=''>
                <p className='font-semibold'>500$</p>
                <p className='line-through opacity-50'>1000$</p>
               <p className="text-green-600 font-semibold">50% Off</p>

            </div>
            </div>
        </div>
        

    )
}
export default ProductCard