import React, { useState } from 'react';
import { FiBookOpen, FiClock, FiLayers, FiSearch, FiTrendingUp, FiUsers } from 'react-icons/fi';

const NeedLibroHub = () => {

    const [isHover, setIsHover] = useState(null);
    console.log(isHover);

     const cards = [
            {
            icon: <FiLayers className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Organize Your Library',
            desc: 'Easily add, update, or remove books. Stay in control of your collection anytime.',
            },
            {
            icon: <FiTrendingUp className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Explore Hot Picks',
            desc: 'See the trending books across all genres and never miss a must‑read again.',
            },
            {
            icon: <FiSearch className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Search by Category',
            desc: 'From drama to sci‑fi — explore your favorite genres and expand your interests.',
            },
            {
            icon: <FiBookOpen className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Track Borrowed Books',
            desc: 'Know exactly which books you’ve borrowed and when they’re due back.',
            },
            {
            icon: <FiUsers className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Community Reviews',
            desc: 'Read honest reviews from fellow readers and share your own thoughts.',
            },
            {
            icon: <FiClock className="text-3xl mb-4 text-[#6794fc]" />,
            title: 'Set Reading Goals',
            desc: 'Define monthly targets and let LibroHub help you stay on track.',
            },
        ];

    return (
    <section className="w-[90%] md:w-[80%] mx-auto">
        <div className="  text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6794fc]">
            Why You Need <span className="text-purple-600">LibroHub</span>?
            </h2>

            <p className="max-w-2xl mx-auto mb-10">
            Managing and discovering books shouldn&apos;t be a chore. LibroHub simplifies your reading
            experience with powerful features made for every reader.
            </p>


            <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {cards.map((card, idx) => (
                <div onMouseEnter={() => setIsHover(idx)} onMouseLeave={() => setIsHover(null)} key={idx} className="border shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between" > 

                <div className= {`flex justify-center  duration-1000  ${isHover === idx ? 'translate-x-[-30%] scale-125' : ''}`}>
                    {card.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-[#6794fc] mb-2">{card.title}</h3>
                <p className="">{card.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default NeedLibroHub;