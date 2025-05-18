import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateBook = () => {

    const {user} = useContext(AuthContext)
    const book = useLoaderData();
    // console.log(book)
    const navigate = useNavigate();

    const handleUpdateBook = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const image = form.get('image');
        const category = form.get('category');
        const quantity = form.get('quantity');
        const rating = form.get('rating')
        const author = form.get('author-name')
        const description = form.get('description')
        const bookContent = form.get('book-content')
        const bookAdderName = user?.displayName || 'Unknown User';
        const bookAdderEmail = user.email

        const updatedBook ={ name, image, category, quantity, rating, author, description, bookContent, bookAdderName, bookAdderEmail}
        // console.log(updatedBook)

        fetch(`https://11th-assignment-server-delta.vercel.app/books/${book._id}`, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedBook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.matchedCount){
                // console.log(data);
                Swal.fire({
                    title: "Book Updated Successfully Done",
                    icon: "success",
                    draggable: true
                  });
                  navigate('/all-book')
            }
        })
    }

    return (
        <section className='py-20'>
            <div className='bg-[#abc4ff]/40  md:m-10 border-2 border-[#abc4ff] rounded-2xl   duration-300 font-semibold px-10'>

            <h2 className='text-center text-xl md:text-2xl xl:text-4xl font-bold my-5 border-b-2 border-[#e3f2fd] w-[50%] mx-auto  '>Update Book Information</h2>

            <form onSubmit={handleUpdateBook} className='flex flex-col justify-center'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center' >
                    {/* Book Name */}
                    <div className='w-full'>
                        <p>Book Name</p>
                        <input type="text" name='name' defaultValue={book.name} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" required />
                    </div>

                    {/* Book Image */}
                    <div>
                        <p>Book Image link</p> 
                        <input type="text" name='image' defaultValue={book.image} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" required />
                    </div>

                    {/* Book Category */}
                    <div>
                        <p>Book Category</p>
                        <select name="category" defaultValue={book.category} id="" className=" border-2 p-3 rounded-lg input-bordered w-full  cursor-pointer bg-[#abc4ff] hover:bg-[#ffedd8] duration-300"  required >
                            <option required disabled value="">Select Book Category</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>

                    {/* Author Name */}
                    <div>
                        <p>Author Name</p>
                        <input type="text" name='author-name' defaultValue={book.author}  className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" required />
                    </div>

                    {/* Quantity */}
                    <div>
                        <p>Book Quantity</p>
                        <input type="number" name='quantity' defaultValue={book.quantity} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300"  required />
                    </div>

                    {/* Rating */}
                    <div>
                        <p>Book Rating</p>
                        <input type="number" name='rating' defaultValue={book.rating} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" min={1} max={5} required />
                    </div>

                    {/*  Short Description */}
                    <div>
                        <p>Short Description</p>
                        <input type="text" name='description' defaultValue={book.description} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" required />
                    </div>

                    {/*  Book Content  */}
                    <div>
                        <p>Book Content </p>
                        <input type="text" name='book-content' defaultValue={book.bookContent} className="input input-bordered w-full  bg-[#abc4ff] hover:bg-[#ffedd8] duration-300" required />
                    </div>

            </div>

                {/* submit */}
                <div className='my-5 flex justify-center'>
                    <button  className='btn border-none bg-green-400 hover:bg-[#90caf9] hover:border-none scale-95 duration-300 hover:scale-90 sm:text-base text-black hover:text-white shadow-md w-[50%]'>Submit </button>
                </div>

            </form>

            </div>
        </section>
    );
};

export default UpdateBook;