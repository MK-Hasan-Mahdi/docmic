import React from 'react';
import cardiology from '../../../asset/docmic/medical-icon_i-cardiology.png';
import checkup from '../../../asset/docmic/bi_clipboard2-check-fill.png';
import dental from '../../../asset/docmic/medical-icon_i-dental.png';
import opthalmology from '../../../asset/docmic/fluent_briefcase-medical-32-filled.png';

const Service = () => {
    return (
        <>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6'>
                <div className='bg-white px-4 rounded-md shadow-xl p-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className=''>Cardiology</h1>
                        <img src={cardiology} alt="cardiology" />
                    </div>
                    <p className='py-6 text-sm'>Seduahag perspiciati under omnised atused error.</p>
                    <h1 className='text-xl cursor-pointer'>Explore Now</h1>
                </div>
                <div className='bg-white px-4 rounded-md shadow-xl p-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className=''>Monthly Checkup</h1>
                        <img src={checkup} alt="checkup" />
                    </div>
                    <p className='py-6 text-sm'>Seduahag perspiciati under omnised atused error.</p>
                    <h1 className='text-xl cursor-pointer'>Explore Now</h1>
                </div>
                <div className='bg-white px-4 rounded-md shadow-xl p-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className=''>Dental Care</h1>
                        <img src={dental} alt="dental" />
                    </div>
                    <p className='py-6 text-sm'>Seduahag perspiciati under omnised atused error.</p>
                    <h1 className='text-xl cursor-pointer'>Explore Now</h1>
                </div>
                <div className='bg-white px-4 rounded-md shadow-xl p-10'>
                    <div className='flex justify-between items-center'>
                        <h1 className=''>Opthalmology</h1>
                        <img src={opthalmology} alt="opthalmology" />
                    </div>
                    <p className='py-6 text-sm'>Seduahag perspiciati under omnised atused error.</p>
                    <h1 className='text-xl cursor-pointer'>Explore Now</h1>
                </div>
            </div>
        </>
    );
};

export default Service;