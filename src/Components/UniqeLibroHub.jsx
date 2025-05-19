import React from 'react';
import { FaClock, FaStar, FaUserShield } from 'react-icons/fa';

const UniqeLibroHub = () => {
    return (
        <div className=" px-6 md:px-10 w-[90%] md:w-[80%] mx-auto">
            <div className=" mx-auto grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6794fc] mb-4 text-center lg:text-left">
                    What Makes <span className="text-purple-600">LibroHub</span> Unique?
                </h2>
                <p className="text-lg">
                    We go beyond basic library features. LibroHub brings innovation, trust, and a reader-first experience that sets us apart from the rest.
                </p>
                </div>

                {/* Right Cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                <div className="border shadow-md rounded-xl p-5 hover:shadow-lg transition text-center ">
                    <FaClock className="text-4xl mx-auto text-[#6794fc] mb-3" />
                    <h3 className="font-semibold text-lg mb-1">24/7 Access</h3>
                    <p className="text-sm">Enjoy anytime access to your books and features, no matter where you are.</p>
                </div>

                <div className="border shadow-md rounded-xl p-5 hover:shadow-lg transition text-center ">
                    <FaUserShield className="text-4xl mx-auto text-[#6794fc] mb-3" />
                    <h3 className="font-semibold text-lg mb-1">Privacy Focused</h3>
                    <p className="text-sm">Your data is safe. We prioritize your reading habits and your privacy equally.</p>
                </div>

                <div className="border shadow-md rounded-xl p-5 hover:shadow-lg transition text-center  col-span-2">
                    <FaStar className="text-4xl mx-auto text-[#6794fc] mb-3" />
                    <h3 className="font-semibold text-lg mb-1">Top Rated by Readers</h3>
                    <p className="text-sm">Thousands of readers love LibroHub for its design, features, and simplicity.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default UniqeLibroHub;