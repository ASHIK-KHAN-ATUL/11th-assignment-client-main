import React from 'react';
import BookCategories from '../Components/BookCategories';
import BorrowingTipsFAQ from '../Components/BorrowingTipsFAQ ';
import AvialableHotBooks from '../Components/AvialableHotBooks';
import Banners from '../Components/Banners';
import WhyChoseUs from '../Components/WhyChoseUs';
import Contact from '../Components/Contact';


const Home = () => {
    return (
        <div>
            <div>
                <Banners></Banners>
            </div>
            <BookCategories></BookCategories>
            <BorrowingTipsFAQ></BorrowingTipsFAQ>
            <div className='w-[60%] mx-auto'>
                <AvialableHotBooks></AvialableHotBooks>
            </div>
            <WhyChoseUs></WhyChoseUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;