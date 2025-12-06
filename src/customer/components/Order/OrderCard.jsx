import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";
export const OrderCard=()=>{
       const navigate=useNavigate()
    return(
        <div  onClick={() => navigate(`${3}`)} className="bg-white rounded-md shadow-black p-5 w-full mx-auto hover:shadow-2xl border">
            <div className="flex items-center gap-6 w-full">
                {/*Image Div */}
                <img src="https://as1.ftcdn.net/v2/jpg/04/33/68/84/1000_F_433688443_15MjJmYAGLrEbymhwRUkX2HtOnb95rdw.jpg" alt="" className="w-15 h-15 object-cover rounded "/>
                {/*Product Info */}
                <div className="flex flex-col justify-center min-w-[180px]">
                    <p className="font-medium text-base ">Men Slim Shirt </p>
                    <p className="text-xs text-gray-500 mt-1">Size:M </p>
                    <p className="text-xs text-gray-500 ">Color:Black</p>
                </div>
                {/*Price */}
                <div className="ml-4">
                    <span className=" bg-white-500 text-black px-2 py-1 rounded text-sm font-semibold ">66$</span>
                </div>
                {/*Delivery Status */}
                <div className="flex-1 flex flex-col items-end">
                    <div className="flex items-center gap-1">
                        <CheckCircleIcon style={{color:"green" ,fontSize:18}}/>
                        <span className="font-semibold text-sm">Expected Delivery On 7 Jul</span>
                    </div>
                    <span className=" text-xs text-gray-500">Item Has Been Delivered</span>
                </div>

            </div>
            


        </div>
    )
}