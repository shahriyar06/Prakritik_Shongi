// import React, { useRef, useState } from 'react';
import { IoSearch } from "react-icons/io5";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mb-10 h-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/WPHyFrZ/slider0.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <div className='pt-44'>
                                <h2 className='text-[#FFFFFF] text-center w-4/6 mx-auto text-6xl font-bold'>Take your creativity anywhere with the <span className='text-[#A1662F]'>Prakritik Shongi..</span></h2>
                                <p className='text-[#FFFFFF] text-center w-9/12 mx-auto text-xl font-semibold mt-5'>Discover exquisite handcrafted jute and wood creations, blending natural elements with artisanal expertise for timeless elegance in home decor.</p>
                                <div className='w-6/12 mx-auto  mt-10'>
                                    <label className="input rounded-full flex items-center gap-2 h-12 ">
                                        <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                        <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/rsf6zVL/slider1.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <div className='pt-48'>
                                <h2 className='text-[#FFFFFF] text-center w-4/6 mx-auto text-6xl font-bold'>Do not just dream it. <span className='text-[#8b4513]'>Make it..</span></h2>
                                <p className='text-[#FFFFFF] text-center w-9/12 mx-auto text-xl font-semibold mt-9'>Transform your aspirations into reality with our exquisite jute and wood crafts, embodying creativity, sustainability, and timeless elegance.</p>
                                <div className='w-6/12 mx-auto  mt-10'>
                                    <label className="input rounded-full flex items-center gap-2 h-12 ">
                                        <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                        <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/H2x1D8S/slider3.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <div className='pt-44'>
                                <h2 className='text-[#FFFFFF] text-center w-4/6 mx-auto text-6xl font-bold'>Turning Dreams into <span className='text-[#a0522d]'>Artisanal</span> Reality.</h2>
                                <p className='text-[#FFFFFF] text-center w-9/12 mx-auto text-xl font-semibold mt-8'>From dreams to handcrafted wonders, witness the magic of jute and wood craftsmanship in our artisanal collection.</p>
                                <div className='w-6/12 mx-auto  mt-10'>
                                    <label className="input rounded-full flex items-center gap-2 h-12 ">
                                        <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                        <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;