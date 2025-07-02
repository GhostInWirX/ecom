//A7
import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCrousel =({data,category})=>{
  const [activeindex,setactiveindex]=useState(0)
  const carouselRef = useRef();
    const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
};

const slideprev = () => carouselRef.current && carouselRef.current.slidePrev();
const slidenext = () => carouselRef.current && carouselRef.current.slideNext();
const syncActiveIndex = (e) => setactiveindex(e.item); 
//
const items=data.slice(0,10).map((item)=><HomeSectionCard product={item}/>)
    return(
        <div className="relative px-4 lg:px-8 ">
          <div className="py-6 text-center">
             <h1 className="text-3xl font-bold text-gray-800">{category}</h1>
          </div>

         <div className="relative p-5 ">
            <AliceCarousel
              ref={carouselRef}
              items={items}
              disableButtonsControls
              infinite
              responsive={responsive}
              disableDotsControls
              onSlideChanged={syncActiveIndex}
              activeIndex={activeindex}
            />
            {activeindex!=items.length-4 &&<Button variant="contained" className="z-50" onClick={slidenext} sx={{position:'absolute', top:'8rem',right:'0rem'}} color="white" aria-label="next"> <KeyboardArrowRightIcon/></Button>}

           {activeindex!=0 && <Button variant="contained" className="z-50" onClick={slideprev} sx={{position:'absolute', top:'8rem',left:'0rem'}} color="white"  aria-label="next" > <KeyboardArrowLeftIcon/></Button>}

          </div>
        </div>
    )
}
export default HomeSectionCrousel






