import React, { useState } from 'react';
import AllBooks from '../Pages/AllBooks';
import AllBookTable from '../Pages/AllBookTable';

const ToggleForAllBooks = () => {

    const [viewMode,  setViewMode] = useState("card")
    // console.log(viewMode)

    return (
        <div className='pt-10'>
            <div className='w-[75%] sm:w-1/2 lg:w-1/3 mx-auto flex justify-center font-semibold md:text-lg  rounded-lg py-2 border-2 border-dashed border-[#abc4ff]'>
                <label className='flex items-center' >Select View : </label>
                <select className='border-2 border-dotted border-[#abc4ff] rounded-md ml-2  p-2' name="" id="" value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>
            {
                viewMode === "card" ? 
                (<AllBooks></AllBooks>) 
                :
                (<AllBookTable></AllBookTable>)
            }

        </div>
    );
};

export default ToggleForAllBooks;