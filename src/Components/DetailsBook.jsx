import React, { useContext } from 'react';
import { data, useLoaderData, useNavigate } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useTheme from './Hooks/UseTheme';

const DetailsBook = () => {

    const book = useLoaderData();
    console.log(book)

    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    const [theme] = useTheme();

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const userName = form.get('name')
        const userEmail = form.get('email')
        const userPic = user?.photoURL;
        const returnDate = form.get('returnDate') 
        const bookId = book._id;
        const bookName = book.name;
        const borrowDate = new Date();
        const bookImage = book.image;
        const bookCategory = book.category;


        // if(!returnDate){
        //     toast.error('Please select a return date')
        // }

        const borrowBookDetails = {userName, userEmail, returnDate, bookId, bookName, borrowDate, userPic, bookImage, bookCategory};
        console.log(borrowBookDetails)

        fetch(`https://11th-assignment-server-delta.vercel.app/borrow/${book._id}`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(borrowBookDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                            Swal.fire({
                                title: "Book Borrowed Successfully Done",
                                icon: "success",
                                draggable: true
                              });
                              document.getElementById('my_modal_5').close();
                              navigate('/')
                            }
        })
    }

    return (
        <section className='px-10 py-20'>
            <div className="hero  bg-white/30 drop-shadow-sm border rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex flex-col gap-5 font-semibold'>
                    <h1 className="text-3xl font-bold">Book Name : {book.name}</h1>
                    <p className="text-sm sm:text-2x">Author Name : {book.author}</p>
                    <p className="text-sm sm:text-2x">Book Category : {book.category}</p>
                    <p className="text-sm sm:text-2x">Book Description : {book.description}</p>
                    <p className="text-sm sm:text-2x">Book Content : {book.bookContent}</p>
                    <p className="text-sm sm:text-2x">Book Quantity : {book.quantity}</p>
                    <p className="flex  items-center text-sm sm:text-2xl">Rating :  <ReactStars count={5} value={book.rating} size={25}></ReactStars> </p>  
                    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-outline btn-success w-[50%] mx-auto  py-3 px-5  hover:scale-95 rounded-xl  hover:text-white duration-300 hover:shadow-md hover:shadow-lime-50 text-base" disabled={book.quantity == 0}>{book.quantity > 0 ? 'Borrow Book' : 'Out Of Stock'}</button>
                    </div>
                </div>
            </div>


            {/* Modal  */}
            <dialog id="my_modal_5" className="modal modal-bottom w-[90%] mx-auto  sm:modal-middle">
            <div className={`modal-box ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <h3 className="font-bold text-lg">Borrow : {book.name} </h3>
                <div className=" flex flex-row justify-center">
                <form onSubmit={handleSubmit}>
                    <section className='py-5 flex flex-col gap-5'>
                        <div>
                            <label>Name <input name='name' type="text" defaultValue={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs bg-blue-200" required/></label>
                        </div>
                        <div>
                            <label>Email <input name='email' type="email" defaultValue={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs bg-blue-200" required /></label>
                        </div>
                        <div>
                            <label>Set Return Date<input name='returnDate' type="date"  placeholder="Type here" className="input input-bordered w-full max-w-xs bg-blue-200" required /></label>
                        </div>
                    </section>

                   <div className='flex flex-row justify-center items-center w-[60%] sm:w-full mx-auto gap-5 '>
                    <button type='submit' className="btn btn-outline btn-success w-[80%] mx-auto  py-3 px-5  rounded-xl  sm:text-base">Confirm Borrow</button>

                    <button 
                    onClick={(e) => {
                        e.target.form.reset();
                        document.getElementById('my_modal_5').close();
                         
                        } }
                     className="btn btn-outline btn-error w-[80%] mx-auto  py-3 px-5  rounded-xl  sm:text-base">Cancel</button>
                   </div>
                </form>
                </div>
            </div>
            </dialog>


        </section>
    );
};

export default DetailsBook;