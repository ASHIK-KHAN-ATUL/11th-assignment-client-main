import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const AllBookTable = () => {
  const books = useLoaderData();
  // console.log(books);
  const {user} = useContext(AuthContext);

  return (
    <div className="pb-20 pt-10 px-5">

        <div className="overflow-x-auto">
          <table className="table border-2 border-black">
            {/* head */}
            <thead >
              <tr className="bg-[#e9edc9] ">
                <th>Image</th>
                <th>Book Name & Category</th>
                <th>Quantity & Rating</th>
                <th>Author </th>
                <th>Action</th>
              </tr>
            </thead>

            {
                books.map(book => 
                <tbody>
                <tr className="border-black ">

                  <td>
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 md:h-20 md:w-200">
                          <img className="duration-300 hover:scale-110 hover:object-center cursor-pointer border" src={book.image} alt="Book Pic"
                            />
                        </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">

                      <div>
                        <div className="font-bold">{book.name}</div>
                        <div className="text-sm opacity-50">{book.category}</div>
                      </div>
                    </div>
                  </td>

                  <td className="font-bold ">
                    <span>{book.quantity}</span>
                    <span className=" bg-blue-100 px-3 py-1 rounded-2xl font-normal ">Rating:{book.rating} </span>
                  </td>

                  <td>{book.author}</td>

                  <td>
                    <Link 
                       onClick={() => {
                                if(book.bookAdderEmail !== user.email){
                                  toast.error("You can only update books you added.");
                                    } }}
                      to={book.bookAdderEmail === user.email ? `/updatebook/${book._id}` : '#'} 
                      className={`btn btn-outline btn-success duration-300 w-full scale-90 ${book.bookAdderEmail !== user.email ? 'btn btn-outline btn-error cursor-not-allowed' : 'hover:bg-sky-400 hover:text-white'}`}>Update Book
                    </Link>
                  </td>

                </tr>
              </tbody>
                )
            }


          </table>

        </div>
      
    </div>
  );
};

export default AllBookTable;
