import React, { useContext } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';

const BookCard = ({book}) => {

    const {user} = useContext(AuthContext);

    // console.log(book);

    return (
        <div key={book._id} className=" border rounded-md px-5 w-64 flex flex-col justify-evenly pb-2 shadow-md hover:shadow-lg">

                <img src={book.image} className="w-[200px] h-[300px] object-cover  shadow-2xl mx-auto pt-3 " />
                <div className=' flex flex-col  my-3 '>
                    <h1 className=" font-bold ">{book.name}</h1>
                    <p className="">{book.author}</p>
                    <p className="">{book.category}</p>                  
                    <p className="">{book.quantity}</p>                  
                    <div className="flex  items-center text-sm sm:text-2xl"><ReactStars count={5} value={Number(book.rating)} size={30} edit={false} ></ReactStars> </div>              
                </div>

                <Link to={book.bookAdderEmail === user.email ? `/updatebook/${book._id}` : '#'}
                    onClick={() => {
                        if(book.bookAdderEmail !== user.email){
                            toast.error("You can only update books you added.");
                        }
                    }}
                    className={`btn btn-outline btn-success duration-300 w-full scale-90 ${
                        book.bookAdderEmail !== user.email ? 'btn btn-outline btn-error cursor-not-allowed' : 'hover:bg-sky-400 hover:text-white'
                      }`} >Update Book
                </Link>

            </div>
    );
};

export default BookCard;