import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AvialableHotBooks = () => {

    const [hotBooks, setHotBooks] = useState([]);
    // console.log(hotBooks)

    useEffect( () =>{
        fetch('https://11th-assignment-server-delta.vercel.app/books/latest')
        .then(res => res.json())
        .then(data => {
            setHotBooks(data)
        })
    } , [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,   
        autoplaySpeed: 3000,  
        pauseOnHover: true,    
      };


    return (
        <div className=" py-10  ">
            <h2 className='font-semibold  md:font-bold text-xl md:text-3xl py-10'>Hot Books</h2>
            <Slider {...settings} className="">
                {
                    hotBooks.map((hotBook, idx) => (
                        <div key={idx} className=''>
                            <img className='w-20 md:w-36' src={hotBook.image} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default AvialableHotBooks;