import react from 'react'
import { useLocation } from 'react-router-dom';
import { AddressCard } from '../AddressForm/AddressForm';
import { OrderTracker } from './OrderTracker';
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

        <div className=''>
            <OrderTracker activeStep={activestep} steps={steps}/>
        </div>

        

    </div>
    )

}