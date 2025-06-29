import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouserData } from './MainCrouseldata'; // Importing the data


const items = CarouserData.map((item) => (
    <img
        className="cursor-pointer w-[9000px] h-[400px] object-cover"
        role="presentation"
        src={item.images}
        alt=""
    />
));

const MainCarousel = () => {
    return (
        <div className="flex justify-center">
            <AliceCarousel
                items={items}
                autoPlay
                autoPlayInterval={1000}
                infinite
                disableDotsControls={false}
                disableButtonsControls={true}
            />
        </div>
    );
};

export default MainCarousel;