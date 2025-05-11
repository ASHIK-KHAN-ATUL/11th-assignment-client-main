import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Components/BookCard';

const AllBooks = () => {

    const books = useLoaderData();
    // console.log(books)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-20 justify-items-center gap-5'>
            {
                books.map(book => <BookCard key={book._id} book={book} ></BookCard>)
            }
        </div>
    );
};

export default AllBooks;