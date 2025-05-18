import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay  } from 'swiper/modules';


const AvialableHotBooks = () => {

    const [hotBooks, setHotBooks] = useState([]);
    // console.log(hotBooks);

    useEffect( () =>{
        fetch('https://11th-assignment-server-delta.vercel.app/books/latest')
        .then(res => res.json())
        .then(data => {
            setHotBooks(data)
        })
    } , [])


    return (
        <div className=" pt-20  ">
            <h2 className='font-semibold  md:font-bold text-xl md:text-3xl py-10 text-center'>Hot Books</h2>

             <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{ clickable: true }}
                autoplay={{
                delay: 2500,

                }}
                breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                        >
                    {
                        hotBooks.map((book, index) => 
                        <SwiperSlide key={index}>
                            <img src={book.image} className='h-60 cursor-pointer' alt="" />
                        </SwiperSlide>)
                    }
            </Swiper>

        </div>
    );
};

export default AvialableHotBooks;