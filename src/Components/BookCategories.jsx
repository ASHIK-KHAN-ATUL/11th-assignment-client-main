import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {

    const categories = [
        {name:"Novel"},
        {name:"Drama"},
        {name:"Sci-Fi"},
        {name:"Thriller"},
        {name:"History"}
    ]

    const [isHover, setIsHover] = useState(null);
    // console.log(isHover);

    return (
       <div className='pt-20 '>
            <div className=' p-4 w-[90%] lg:w-[75%] mx-auto '>
                <h1 className='py-5 font-bold md:text-2xl text-center mb-10'>Book By Category !!</h1>
                <div className=' grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 '>
                    {categories.map( (category, idx)=> (
                        <div key={idx} className='w-full  flex justify-center'>
                            <Link onMouseEnter={() => setIsHover(idx)} onMouseLeave={() => setIsHover(null)} to={`/category/${category.name}`} className=' w-[50%]  border-2 border-[#88d4ab] hover:border-[#abc4ff] overflow-hidden flex flex-row h-14 relative rounded-xl hover:w-[45%] duration-500' >
                            <span className={` w-[20%] bg-none `}></span>

                            <span className={`${isHover === idx ? ' rotate-90 scale-x-150 bg-[#99e2b4] ': ''} bg-[#abc4ff] w-full h-full rotate-6 scale-y-150 duration-500 transform rounded-full`}></span>

                            <span className={` w-[20%] bg-none`}></span>

                            <p className={` ${isHover === idx ? 'text-white font-semibold text-lg ': ''} absolute flex items-center justify-center inset-0 font-medium duration-300`}>{category.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
       </div>
    );
};

export default BookCategories;