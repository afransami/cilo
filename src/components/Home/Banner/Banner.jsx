import React from 'react';
import Marcedes from './Marcedes';
import Rangrover from './Rangrover';

const Banner = () => {
    return (
        <div>
            <div className='relative w-full aspect-w-16 aspect-h-9'>
                <div>
                <img className='object-contain w-full h-auto' src="https://i.ibb.co/v1K4Mhr/Rectangle-2.png" alt="" />
                </div>
                <div className=' absolute top-2 left-[35%] md:top-8 md:lef-[50%] lg:top-22 lg:left-[50%] sm:text-base md:text-lg lg:text-2xl text-md flex flex-col items-center justify-center'>
                <p className='font-bold'>Rolls Royce-Pantom</p>
                <small className='underline'>Explore Details</small>
                </div>
            </div>
            <Marcedes></Marcedes>
            <Rangrover></Rangrover>
        </div>
    );
};

export default Banner;