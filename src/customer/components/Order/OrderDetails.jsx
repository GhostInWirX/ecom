import react from 'react'
import { useLocation } from 'react-router-dom';
import { AddressCard } from '../AddressForm/AddressForm';
import { OrderTracker } from './OrderTracker';
import { Rating } from '@mui/material';
export const OrderDetails =()=>
{
    const location=useLocation();
    const query=new URLSearchParams(location.search);
    const steps=["Placed","Confirmed","Shipped","On Delivery","Delivered"];
    const stepParam=Number(query.get("step"));
    let activestep=stepParam && stepParam>0 ? stepParam-1:0;
    if(activestep>=steps.length) activestep=stepParam.length-1;
    return(
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='mt-10'>
            <OrderTracker activeStep={activestep} steps={steps}/>
        </div>

        <div className='bg-white rounded  shadow p-5 flex items-center justify-between max-w-4xl mx-auto'>
            <img
            src="https://as1.ftcdn.net/v2/jpg/04/33/68/84/1000_F_433688443_15MjJmYAGLrEbymhwRUkX2HtOnb95rdw.jpg" alt="any" className='w-20 h-28 object-cover rounded mr-6'/>

        <div className='flex-1'>
            <div className='font-semibold'>Men Shirt</div>
            <div className='text-sm text-gray-500'>Color:Grey</div>
             <div className='text-sm text-gray-500'>Brand Name </div>
             <div className='font-bold mt-2'>190$ </div>
        </div>

        <div className='flex items-center'>
            <Rating value ={1} max={1} readOnly size='small' sx={{color:'purple'}}/>
            <a href="" className='text-purple-700 hover:underline text-sm'>
                Rate & Products
            </a>
            

        </div>

        </div>




        

    </div>
    )

}