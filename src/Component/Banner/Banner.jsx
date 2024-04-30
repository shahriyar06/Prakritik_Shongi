// import React, { useRef, useState } from 'react';
import { IoSearch } from "react-icons/io5";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { Slide } from "react-awesome-reveal";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const handleType = () => {
    }

    const handleDone = () => {
    }
    return (
        <div className='mb-10 h-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
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
                            <Slide>
                                <div className='lg:pt-44 pt-36'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold' >Take your creativity anywhere with the <span className='text-[#A1662F]'><Typewriter
                                        words={['Prakritik Shongi..']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-5'>Discover exquisite handcrafted jute and wood creations, blending natural elements with artisanal expertise for timeless elegance in home decor.</p>
                                    <div className='lg:w-6/12 w-4/5 mx-auto mt-10'>
                                        <label className="input rounded-full flex items-center gap-2 h-12 ">
                                            <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                            <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                        </label>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/rsf6zVL/slider1.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <Slide>
                                <div className='pt-48'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold'>Do not just dream it. <span className='text-[#8b4513]'><Typewriter
                                        words={['Make it..']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-9'>Transform your aspirations into reality with our exquisite jute and wood crafts, embodying creativity, sustainability, and timeless elegance.</p>
                                    <div className='lg:w-6/12 w-4/5 mx-auto  mt-10'>
                                        <label className="input rounded-full flex items-center gap-2 h-12 ">
                                            <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                            <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                        </label>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('https://i.ibb.co/H2x1D8S/slider3.jpg')" }}>
                        <div className='bg-black min-h-screen bg-opacity-60'>
                            <Slide>
                                <div className='pt-44'>
                                    <h2 className='text-[#FFFFFF] text-center w-5/6 lg:w-4/6 mx-auto text-3xl lg:text-6xl font-bold'>Turning Dreams into <span className='text-[#a0522d]'><Typewriter
                                        words={['Artisanal Reality..']}
                                        loop={30}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    /></span></h2>
                                    <p className='text-[#FFFFFF] text-center lg:w-9/12 w-10/12 mx-auto text-base lg:text-xl font-semibold mt-8'>From dreams to handcrafted wonders, witness the magic of jute and wood craftsmanship in our artisanal collection.</p>
                                    <div className='lg:w-6/12 w-4/5 mx-auto  mt-10'>
                                        <label className="input rounded-full flex items-center gap-2 h-12 ">
                                            <input type="text" className="grow rounded-full" placeholder="   Search here" />
                                            <button className="h-10 bg-[#bdac8f] text-[#FFFFFF] rounded-full w-10 border-[#bdac8f] text-xl"><IoSearch className="text-xl ml-2" /></button>
                                        </label>
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;