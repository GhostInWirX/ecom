import react from 'react'
import { CartItem } from './CartItem'
export const Cart = ()=>
{
    return(
        <div className='min-h-screen bg-gray-50 py-10 px-4 lg:px-16'>
            <div className='grid lg:grid-cols-3 gap-8'>
                {/*Left Part :Cart Item */}
                <div className='lg:col-span-2 space-y-5'>
                    <CartItem/>
                </div>


            </div>
        </div>

    )

} 