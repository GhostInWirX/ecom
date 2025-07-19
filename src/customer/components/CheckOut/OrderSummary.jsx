import { AddressCard } from "../AddressForm/AddressForm"
import { CartItem } from "../Cart/CartItem"
import { Button } from "@mui/material"
export const OrderSummary=()=>{
    return(
        <div>
            <div className="p-5 shadow-lg rounded-s-md border border-gray-200">
                <AddressCard/>
            </div>
             <div className='min-h-screen bg-gray-50 py-10 px-4 lg:px-16'>
                        <div className='grid lg:grid-cols-3 gap-8'>
                            {/*Left Part :Cart Item */}
                            <div className='lg:col-span-2 space-y-5'>
                                {[1,1,1,1,1,1,1,,1,1,1,1,1].map((item)=><CartItem/>)}
                            </div>
                            {/*Right Side Card  */}
                            <div className='sticky top-5 h-fit'>
                                <div className='border border-gray-200 p-5 rounded-lg shadow-md bg-white'>
                                    <h2 className='text-lg font-semibold mb-4'>Price Summary</h2>
                                    <div className='flex justify-between pt-3'>
                                        <span>Discount</span>
                                        <span className='text-green-700'>900$</span>
                                    </div>
                                     <div className='flex justify-between pt-3'>
                                        <span>Deleivery Charges</span>
                                        <span className='text-green-700'>50$</span>
                                    </div>
            
                                      <div className='flex justify-between pt-3 font-bold'>
                                        <span>Total Amount</span>
                                        <span className='text-green-700'>950</span>
                                    </div>
                                </div>
                                  <Button variant='contained' className='w-full ' sx={{px:"2rem" , py:".7rem", bgcolor:"purple",mt:3}}>Proceed To Payment</Button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}