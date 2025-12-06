import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Button ,IconButton} from '@mui/material'
export const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border-gray-200 rounded-xl bg-white ">
            <div className="flex items-start space-x-5">
                {/*Image Container */}
                <div className="w-[6rem] h-[6rem] lg:w-[9rem] rounded-md overflow-hidden">
                    <img className=" w-full h-full object-cover object-top " src="https://as1.ftcdn.net/v2/jpg/02/79/10/20/1000_F_279102096_nY6zRr4Ux585Fk4K2p8UeMkmzJKZwTua.jpg" alt="product" />
                </div>
                {/*Product Info */}
                <div className="space-y-1 flex-1">
                    <p className="font-semibold text-gray-900">Men Shirt </p>
                    <p className="text-gray-600 text-sm">Size: L , White</p>
                    <p className="text-gray-500 text-sm mt-2">Seller : XYZ</p>
                    <div className="flex space-x-5 item-center text-gray-900 pt-6">
                        <p className="">900$</p>
                        <p className="line-through text-gray-400 text-sm">1000$</p>
                        <p className="text-green-600 text-sm">10%</p>
                    </div>
                </div>

                <div className='lg:flex items-center lg:space-x-10 pt-5'>
                    <div className='flex items-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>4</span>
                         <IconButton>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </div>
                    <div><Button>Remove</Button></div>

                </div>
            </div>


        </div>

    )
}