import React, { useContext } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const BookCard = ({book}) => {

    const {user} = useContext(AuthContext);

    // console.log(book)

    return (
        <div className=" bg-[#bbdefb] bg-opacity-80 border-2 border-[#64b5f6] 
         w-[90%] sm:w-[400px] md:w-[90%]   rounded-xl">
            <div className="flex-col shrink-0">
                <img src={book.image} className="w-[300px] rounded-lg shadow-2xl scale-75 mx-auto pt-5" />
                <div className='px-4 flex flex-col gap-2 text-xl font-semibold '>
                    <h1 className=" font-bold ">Book Name: {book.name}</h1>
                    <p className="">Author Name : {book.author}</p>
                    <p className="">Category : {book.category}</p>                  
                    <p className="">Quantity : {book.quantity}</p>                  
                     <p className="flex  items-center text-sm sm:text-2xl">Rating :  <ReactStars count={5} value={book.rating} size={30}></ReactStars> </p>              
                </div>
                <div className='my-3 flex justify-center'>
                    <Link to={`/updatebook/${book._id}`} className="btn btn-accent hover:bg-sky-400 hover:border-none scale-110 duration-300 hover:scale-125  hover:text-white" disabled={book.bookAdderEmail !== user.email}>Update Book</Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;