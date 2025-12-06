import react from 'react'
import { Avatar,Grid,Box,Rating } from '@mui/material'
export const Productreviewcard=()=>{
    return(
        <Grid container spacing={3} gap={2}>
            <Grid item xs={1}>
                <Box>
                <Avatar className="text-white " sx={{width:56 ,height:56,bgcolor:"purple"}} >R</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-4'>
                    <div>
                        <p className='font-semibold text-lg'>Riaz</p>
                        <p className='opacity-70'>July 7,2025</p>
                        <Rating name="half-rating" value={4} defaultValue={2.5} precision={0.5} readOnly />
                        <p className=''>Nice Product Having Good Exp</p>
                    </div>
                </div>
                {/* <Rating name="half-rating" value={4} defaultValue={2.5} precision={0.5} readOnly /> */}
            </Grid>

        </Grid>

    )

}