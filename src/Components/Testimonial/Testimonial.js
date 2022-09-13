import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from '../../asset/docmic/slider1.png';

const Testimonial = () => {
    return (
        <>
            <div className='mid-container mx-auto'>
                <div>
                    <h1 className='text-secondary text-center'>Testimonial</h1>
                    <h1 className='text-4xl text-center py-6'>What they say?</h1>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper shadow-lg rounded-t-lg lg:w-3/4 mx-auto"
                >
                    <div className='p-10'>
                        <SwiperSlide className='px-5 py-8'>
                            <div className="flex">
                                <div className="w-2/3 flex items-center text-justify p-10">
                                    <div>
                                        <h2>David James</h2>
                                        <p className='text-sm'>Patient</p>
                                        <p className='pt-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <img src={slider1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='px-5 py-8'>
                            <div className="flex">
                                <div className="w-2/3 flex items-center text-justify p-10">
                                    <div>
                                        <h2>David James</h2>
                                        <p className='text-sm'>Patient</p>
                                        <p className='pt-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <img src={slider1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='px-5 py-8'>
                            <div className="flex">
                                <div className="w-2/3 flex items-center text-justify p-10">
                                    <div>
                                        <h2>David James</h2>
                                        <p className='text-sm'>Patient</p>
                                        <p className='pt-2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content</p>
                                    </div>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <img src={slider1} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>

            </div>
        </>
    );
};

export default Testimonial;