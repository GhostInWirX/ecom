
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../customer/components/navigation/Navigation';
import HomePage from '../customer/components/Page/Homepage/HomePage';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Products/Product';
import { useParams } from 'react-router-dom';
import { women_data } from '../Data/women_data';
import { men_data } from '../Data/men_data';
import { Cart } from '../customer/components/Cart/Cart';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import CheckOut from '../customer/components/CheckOut/CheckOut';
import { Order } from '../customer/components/Order/Order';
import { OrderDetails } from '../customer/components/Order/OrderDetails';
const ProductWithData=()=>{
    const {LevelOne}=useParams();
    const data=LevelOne=="men"?men_data:women_data;
    return <Product product={data}/>
}
export const CustomRouters=()=>{
    return(<>

    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
           <Route path="/*" element={<HomePage/>} />
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/:LevelOne/:LevelTwo?" element={<ProductWithData/>}/>
           <Route path="/:LevelOne/:LevelTwo?/product/:productid" element={<ProductDetails/>}/>
           <Route path="/checkout" element={<CheckOut/>}/>
           <Route path="/account/order" element={<Order/>}/>
           <Route path="/account/order/:orderid" element={<OrderDetails/>}/>



        </Routes>


        <div>
            <Footer/>
        </div>
    </div>



    
    </>)
}
