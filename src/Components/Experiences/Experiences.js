import React from 'react';
import experiences from '../../asset/docmic/Frame 23.png';

const Experiences = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10 mt-16 pb-16'>
                <div className='lg:flex md:flex items-center lg:order-1 md:order-1 order-2'>
                    <div>
                        <div className='lg:text-start text-center'>
                            <h1 className='text-secondary'>16+ years experiences</h1>
                            <h1 className='lg:text-3xl text-4xl py-6'>We Are Always ensure Best Medical <br /> Treatment For Your Health</h1>
                            <p className='text-neutral text-sm font-normal mb-10 text-justify'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>

                        </div>
                    </div>
                </div>
                <div className='lg:order-2 md:order-2 order-1 flex justify-end'>
                    <img className='' src={experiences} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experiences;