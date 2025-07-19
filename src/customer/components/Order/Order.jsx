import React from 'react'
import { Grid } from '@mui/material'
import { OrderCard } from './OrderCard'
export const Order =()=>{
    const OrderStatus =[
        {label:'On The Way' , value :'On The Way'},
        {label:'Delivered' , value :'Delivered'},
        {label:'Cancelled' , value :'Cancelled'},
        {label:'Pending' , value :'Pending'}
    ]

    return(
        <div className='px:5 lg:px-20'>
            <Grid container sx={{justifyContent:'flex-start'}}>
                <div className='h-auto shadow-lg rounded-s-md border border-gray-200 p-2 sticky top-2'>
                    <h1 className='font-bold text-lg'>Order Details </h1>
                    <div className='space-y-2 mt-2'>
                        <h1 className='text-lg font-semibold mb-4'>Order ID:3627462</h1>
                    </div>
                    {OrderStatus.map((option)=>(<div className='flex items-center mb-3' key={option.value}>
                        <input type="checkbox" defaultValue={option.value} className='h-4 w-4 border-gray-300' style={{accentColor:'blue'}} id={option.value}/>
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.label}</label>
                    </div>))}
                </div>
                
                <Grid item xs={9} >
                <div className='space-y-5 ml-20'>
                    {[1,1,1,1].map((item)=><OrderCard/>)}
                </div>
            </Grid>
            </Grid>
        
        </div>
    )

}