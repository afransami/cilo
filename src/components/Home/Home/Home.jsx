import React from 'react';
import Banner from '../Banner/Banner';
import SwiperSlider from '../Swiper/SwiperSlider';
import Card from '../Card/Card';





const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <div className='mt-10'>
            <SwiperSlider></SwiperSlider>            
            
            <div className=" mt-8 " style={{ borderBottom: '1px solid slategrey' }}></div>
            </div>
            <div className='mt-10'>
            <Card></Card>
            </div>

            
        </div>
    );
};

export default Home;