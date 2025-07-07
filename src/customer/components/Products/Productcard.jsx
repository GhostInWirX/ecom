import React from 'react';
import "./Productcard.css"
const ProductCard=({product})=>{
    return(
        <div className="productCard w-[12rem] m-3 transition-all cursor-point">
            <div className='h-[18rem]'>
                <img className="h-full w-full object-cover object-left-top" src={product.imageUrl} alt=""/>
            </div>
            <div className='textPart bg-white-p4'>
                <div>
                    <p className="font-bold opacity-60">{product.title}</p>
                    <p>{product.description} </p>
                </div>
            <div className=''>
                <p className='font-semibold'>{product.price}</p>
                <p className='line-through opacity-50'>{product.originalPrice}</p>
               <p className="text-green-600 font-semibold">50% Off</p>

            </div>
            </div>
        </div>
        

    )
}
export default ProductCard