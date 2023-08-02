import React from 'react';
import Banner from '../Banner/Banner';
import SwiperSlider from '../Swiper/SwiperSlider';





const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <div className='mt-10'>
            <SwiperSlider></SwiperSlider>            
            </div>
            
        </div>
    );
};

export default Home;