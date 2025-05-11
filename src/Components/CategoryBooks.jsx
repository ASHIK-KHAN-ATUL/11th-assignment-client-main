import React, { useContext, useEffect, useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

const CategoryBooks = () => {

    const{name} = useParams();
    const[books , setBooks] = useState([]);
    const {user} = useContext(AuthContext);
    const [isHover, setIsHover] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch(`https://11th-assignment-server-delta.vercel.app/books?category=${name}`)
        .then(res=> res.json())
        .then(data => {
            setBooks(data) 
            setLoading(false);
        })

   } ,[name])


    if (loading) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20 justify-items-center">
                    {
                        Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="flex w-52 flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        ))
                    }
                </div>
            );
        }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 py-20 justify-items-center   '>
            {
                books.map((book, idx) => 

                <div key={idx} className="  bg-white/40 drop-shadow-sm border rounded-md px-5 w-64 pb-2 flex flex-col  justify-evenly">

                        <img src={book.image} className="w-[200px] h-[300px] object-cover  shadow-2xl mx-auto pt-3  " />

                        <div className='px-4 flex flex-col gap-1 my-3 text-sm '>
                            <p className=" font-bold pt-5">Book Name: {book.name}</p>
                            <p className="">Author Name : {book.author}</p>
                            <p className="">Category : {book.category}</p>                  
                            <p className="">Quantity : {book.quantity}</p>                  
                            <p className="flex  items-center ">Rating :  <ReactStars count={5} value={book.rating} size={30}></ReactStars> </p>                  
                        </div>


                        <div key={idx} className='w-full  flex justify-center'>

                            <Link onMouseEnter={() => setIsHover(idx)} onMouseLeave={() => setIsHover(null)} to={`/details/${book._id}`}
                            className=' w-[70%]  border-2 border-[#88d4ab] hover:border-[#abc4ff] overflow-hidden flex flex-row h-12 relative rounded-xl hover:w-[65%] duration-500' >

                            <span className={` w-[20%] bg-none `}></span>
                        
                            <span className={`${isHover === idx ? ' rotate-90 scale-x-150 bg-[#99e2b4] ': ''} bg-[#abc4ff] w-full h-full rotate-6 scale-y-150 duration-500 transform rounded-full`}></span>
                        
                            <span className={` w-[20%] bg-none`}></span>
                        
                            <p className={` ${isHover === idx ? 'text-white font-semibold text-lg ': ''} absolute flex items-center justify-center inset-0  duration-300`}>Details</p>

                            </Link>
                        </div>
                </div>

                )
            }
        </div>
    );
};

export default CategoryBooks;