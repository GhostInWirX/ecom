import React from "react"
const HomeSectionCard =({product})=>{

    return(
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border black">

            <div className='h-[13rem] w-[10rem]'>

                <img className="object-cover object-top w-full h-full border border-red-500" src={product.url} alt={product.name || 'Product Image'} onError={e => {e.target.onerror=null; e.target.src='https://via.placeholder.com/150?text=Image+Not+Found';}}/>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            </div>

        </div>
    )
}
export default HomeSectionCard