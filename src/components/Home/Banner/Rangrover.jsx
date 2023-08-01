import React from 'react';

const Rangrover = () => {
    return (
        <div>
            <div className='relative w-full aspect-w-16 aspect-h-9'>
                <div>
                <img className='object-contain w-full h-auto' src="https://i.ibb.co/BzsGGLM/Rectangle-4.png" alt="" />
                </div>
                <div className='absolute top-2 left-[40%] md:top-8 md:lef-[50%] lg:top-26 lg:left-[50%] md:text-lg lg:text-xl text-sm flex flex-col items-center justify-center '>
                <p className='font-bold'>Range Rover</p>
                <small className='underline'>Explore Details</small>
                </div>
            </div>
        </div>
    );
};

export default Rangrover;